import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component'; 

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule, ImageViewerComponent],  
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  images = [
    { id: 1, title: 'Imagen 1', url: 'src/assets/img/otaku1.jpg' },
    { id: 2, title: 'Imagen 2', url: 'src/assets/img/otaku2.jpg' },
    { id: 3, title: 'Imagen 3', url: 'src/assets/img/otaku3.jpg' }
  ];
  
  selectedImage = null;

  onImageClick(image: any): void {
    this.selectedImage = image;
  }

  clearSelection(): void {
    this.selectedImage = null;
  }
}
