import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private contact: ContactService
  ) { }
  isShown: boolean = true;
  
  contactDetail: any;

  currentPage: any;
  title: "İLETİŞİM" = "İLETİŞİM";
  categories = [
    {
      id: 1,
      name: "İLETİŞİM BİLGİLERİ",
      slug:'iletisim-bilgileri'
    },
    {
      id: 2,
      name: "İLETİŞİM FORMU",
      slug:'iletisim-formu'

    }
  ]

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentPage = params['categoryslug'];
      // console.log("currentpage", this.currentPage)
      if (this.currentPage) {
        // console.log("categorydetail", this.contact.categoryDetail);

        this.contactDetail = this.contact.categoryDetail.filter((value) => {
          let data = value.slug == this.currentPage;
          return data;
        });
        // console.log("detail", this.contactDetail);
      }
    });
    // console.log("currentpage1", this.currentPage)
  }

}
