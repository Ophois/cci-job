import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  /* injection du service sanitizer de DOM
  nécessaire avant de "binder" du html devant d'une API */
  constructor(private sanitizer: DomSanitizer) {}

  // nettoyage du HTML pour en permettre l'affichage
  transform(content: any) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
