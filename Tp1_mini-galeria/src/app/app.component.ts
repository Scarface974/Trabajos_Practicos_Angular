import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';  // Importa el componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ImageGalleryComponent],  // Asegúrate de incluirlo en imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
