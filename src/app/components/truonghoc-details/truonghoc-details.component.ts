import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Truonghoc } from 'src/app/models/truonghoc.model';
import { TruonghocService } from 'src/app/services/truonghoc.service';

@Component({
  selector: 'app-truonghoc-details',
  templateUrl: './truonghoc-details.component.html',
  styleUrls: ['./truonghoc-details.component.css']
})
export class TruonghocDetailsComponent implements OnInit {

  @Input() viewMode = false;
  @Input() currentTruonghoc: Truonghoc = {
    tensv: '',
    diem: 0,
    dadonghocphi: false,
    tenlop: ''
  };
  message = '';
  constructor(
    private truonghocService: TruonghocService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    if(!this.viewMode) {
      this.message = '',
      this.getTruonghoc(this.route.snapshot.params['id'])
    }
  }
  getTruonghoc(id: string): void {
    this.truonghocService.get(id).subscribe({
      next: (data) => {
        this.currentTruonghoc = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  updateDaDongHocPhi(status: boolean): void {
    const data = {
      tensv: this.currentTruonghoc.tensv,
      diem: this.currentTruonghoc.diem,
      dadonghocphi: status,
      tenlop: this.currentTruonghoc.tenlop
    };
    this.message = '';
    this.truonghocService.update(this.currentTruonghoc.masv, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentTruonghoc.dadonghocphi = status;
        this.message = res.message ? res.message : 'Cập nhật trạng thái thành công!';
      },
      error: (e) => console.error(e),
    });
  }
  updateTruonghoc(): void {
    this.message = '';
    this.truonghocService
    .update(this.currentTruonghoc.masv, this.currentTruonghoc)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message
        ? res.message
        : 'Cập nhật trường học thành công!';
      },
      error: (e) => console.error(e),
    });
  }
  deleteTruonghoc(): void {
    this.truonghocService.delete(this.currentTruonghoc.masv).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/truonghoc']);
      },
      error: (e) => console.error(e),
    });
  }
}
