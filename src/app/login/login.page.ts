import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  password: any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  gotoHomePage() {
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

}
