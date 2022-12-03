import { Component, OnInit } from '@angular/core';
import { Truonghoc } from 'src/app/models/truonghoc.model';
import { TruonghocService } from 'src/app/services/truonghoc.service';

@Component({
  selector: 'app-add-truonghoc',
  templateUrl: './add-truonghoc.component.html',
  styleUrls: ['./add-truonghoc.component.css']
})
export class AddTruonghocComponent implements OnInit {

  truonghoc: Truonghoc = {
    tensv: '',
    diem: 0,
    dadonghocphi: false,
    tenlop: ''
  };
  submitted = false;
  constructor(private truonghocService: TruonghocService) { }

  ngOnInit(): void {
  }
  saveTruonghoc(): void {
    const data = {
      tensv: this.truonghoc.tensv,
      diem: this.truonghoc.diem,
      tenlop: this.truonghoc.tenlop
    };
    this.truonghocService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.log(e),
    })
  }
  newTruonghoc(): void {
    this.submitted = false;
    this.truonghoc = {
      tensv: '',
      diem: 0,
      dadonghocphi: false,
      tenlop: ''
    }
  }
}
