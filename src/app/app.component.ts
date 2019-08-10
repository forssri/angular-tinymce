import { Component, OnInit } from '@angular/core';
import tinyMCE from 'tinymce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-tinymce';
  tinyMCEConfig = {
    plugins: 'lists advlist linkplugin',
    toolbar:
      'undo redo | bold italic | bullist numlist outdent indent | insertlink',
    margin_top: 20,
    menubar: false,
    extended_valid_elements:
      'a[clicktracking|href|title|target|rel|type|media|download|hreflang]'
  };
  constructor() {
    // tslint:disable-next-line:no-string-literal
    window['tinyMCE'].overrideDefaults({
      base_url: '/tinymce/', // Base for assets such as skins, themes and plugins
      suffix: '.min' // This will make Tiny load minified versions of all its assets
    });
  }

  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions
    tinyMCE.PluginManager.add('linkplugin', function(editor) {
      editor.ui.registry.addButton('insertlink', {
        type: 'button',
        text: 'test button',
        onAction: () => {
          editor.insertContent(`https://www.google.com`);
        }
      });
    });
  }
}
