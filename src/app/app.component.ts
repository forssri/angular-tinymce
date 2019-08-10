import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tinymce';

  constructor() {
    // We need to setup the base url to /tinymce before
    // tinyMCE instance loads

    // tslint:disable-next-line:no-string-literal
    window['tinyMCE'].overrideDefaults({
      base_url: '/tinymce/', // Base for assets such as skins, themes and plugins
      suffix: '.min' // This will make Tiny load minified versions of all its assets
    });
  }
}
