import { Component } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-ctaegorie-create',
  templateUrl: './ctaegorie-create.component.html',
  styleUrls: ['./ctaegorie-create.component.css']
})
export class CtaegorieCreateComponent {
  categoryName!: string;
  categoryImage!: File;

  constructor(private categoryService: CategoryService) { }

  onSubmit() {
    const formData = new FormData();
    formData.append('nom', this.categoryName);
    formData.append('image', this.categoryImage, this.categoryImage.name);
    console.log(formData);
    this.categoryService.addCategory(formData).subscribe(
      () => {
        console.log("La catégorie a été créée avec succès !");
        // ici vous pouvez rediriger l'utilisateur vers une autre page
      },
      (error) => {
        console.log("Erreur lors de la création de la catégorie :", error);
      }
    );
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.categoryImage = fileInput.files[0];
    }
  }
}