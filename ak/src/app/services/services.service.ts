import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    // private http:HttpClient
  ) { }
  
  categoryDetail = [
    {
      id:1,
      categoryId:1,
      name:'stoklama',
      categoryImg: '../assets/img/services-img.jpg',
      description: "Stoklama detay sayfası"
    },
    {
      id:2,
      categoryId:2,
      name:'laboratuvar',
      categoryImg: '../assets/img/services-img.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quod dolor beatae nihil molestias eos dolores veniam ducimus, et ipsum eaque sed quo possimus autem delectus, veritatis suscipit amet! Iusto suscipit ut corrupti, porro reiciendis, placeat error sit voluptatem at laudantium alias. Cum quibusdam deleniti, quae fugiat commodi facilis explicabo laboriosam blanditiis tempore accusantium numquam? Id ex totam voluptatem dolore doloremque repudiandae nobis, cumque ab quod sit dignissimos consequuntur quidem qui perspiciatis numquam necessitatibus, deleniti quo est inventore consequatur sunt porro iusto, iure veniam. Error iusto maxime iste, adipisci minima dolore mollitia accusantium suscipit consequuntur eaque, doloribus ut quae cum!"
    },
  ]
  // path  = "http://localhost:3000/pages"
}
