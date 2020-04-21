import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private iab: InAppBrowser,
    private platform: Platform,
    )
  
  { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.openStore();
    console.log('enter')
  }
  

  openStore(){
    const url = 'https://ramx.store/'
    const options: InAppBrowserOptions = {
      zoom: 'no',
      hideurlbar: 'yes',
      hidenavigationbuttons:'yes',
      location: 'no'
    }
    const browser = this.iab.create(url,'_blank',options);

    
    browser.on('exit').subscribe(event => {
      navigator['app'].exitApp();
   });
   
  }

}
