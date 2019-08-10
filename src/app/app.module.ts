import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AppComponent } from './app.component';
import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';

@NgModule({
  declarations: [AppComponent, TinyEditorComponent],
  imports: [BrowserModule, EditorModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
