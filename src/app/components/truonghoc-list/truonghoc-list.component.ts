import { Component, OnInit } from '@angular/core';
import { Truonghoc } from 'src/app/models/truonghoc.model';
import { TruonghocService } from 'src/app/services/truonghoc.service';

@Component({
  selector: 'app-truonghoc-list',
  templateUrl: './truonghoc-list.component.html',
  styleUrls: ['./truonghoc-list.component.css']
})
export class TruonghocListComponent implements OnInit {
  truonghoc?: Truonghoc[];
  currentTruonghoc: Truonghoc = {};
  currentIndex = -1;
  tensv = '';
  constructor(private truonghocService: TruonghocService) { }

  ngOnInit(): void {
    this.retrieveTruonghoc();
  }
  retrieveTruonghoc(): void {
    this.truonghocService.getAll().subscribe({
      next: (data) => {
        this.truonghoc = data;
        console.log(data);
      },
      error: (e) => console.log(e),
    });
  }
  refreshList(): void {
    this.retrieveTruonghoc();
    this.currentTruonghoc = {};
    this.currentIndex = -1;
  }
  setActiveTruonghoc(truonghoc: Truonghoc, index: number): void {
    this.currentTruonghoc = {
      ...truonghoc,
      diemtb: truonghoc.diem! / 2
    };
    this.currentIndex = index;
  }
  removeAllTruonghoc(): void {
    this.truonghocService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }
  searchTensv(): void {
    this.currentTruonghoc = {};
    this.currentIndex = -1;
    this.truonghocService.findByTenSV(this.tensv).subscribe({
      next: (data) => {
        this.truonghoc = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
