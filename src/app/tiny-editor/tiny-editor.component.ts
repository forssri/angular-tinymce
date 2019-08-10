import { Component, OnInit } from '@angular/core';
import tinyMCE from 'tinymce';

@Component({
  selector: 'app-tiny-editor',
  templateUrl: './tiny-editor.component.html',
  styleUrls: ['./tiny-editor.component.css']
})
export class TinyEditorComponent implements OnInit {
  tinyMCEConfig = {
    plugins: 'lists advlist linkplugin',
    toolbar:
      'undo redo | bold italic | bullist numlist outdent indent | insertlink',
    margin_top: 20,
    menubar: false,
    extended_valid_elements:
      'a[clicktracking|href|title|target|rel|type|media|download|hreflang]',
    branding: false
  };
  constructor() {}

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
