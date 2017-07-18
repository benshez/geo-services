// import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
//
// export class TranslationProviders {
//
//   public getTranslationFile = (): Promise<any> => {
//     let noProviders: Object[] = [];
//
//     // Define a way to retrieve the local information
//     let locale: string = 'en-US';
//
//     // Set the directory to the translation files
//     let file: string = `../assets/locale/messages.${locale}.xlf`;
//
//     if(!locale || locale === 'en-US') return Promise.resolve(noProviders);
//
//     return new Promise(function (resolve, reject) {
//       let xhr = new XMLHttpRequest;
//       xhr.open('GET', file);
//       xhr.onload = (data: any) => resolve(
//         [
//           { provide: TRANSLATIONS, useValue: data.target.response },
//           { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
//           { provide: LOCALE_ID, useValue: locale }
//         ]
//       );
//       xhr.onerror = () => reject(noProviders);
//       xhr.send();
//     });
//   }
// };
//

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vc2VydmljZXMvaTE4bi5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0ZBQWdGO0FBQ2hGLEVBQUU7QUFDRixzQ0FBc0M7QUFDdEMsRUFBRTtBQUNGLHNEQUFzRDtBQUN0RCxzQ0FBc0M7QUFDdEMsRUFBRTtBQUNGLHdEQUF3RDtBQUN4RCxvQ0FBb0M7QUFDcEMsRUFBRTtBQUNGLG9EQUFvRDtBQUNwRCxvRUFBb0U7QUFDcEUsRUFBRTtBQUNGLDZFQUE2RTtBQUM3RSxFQUFFO0FBQ0Ysc0RBQXNEO0FBQ3RELHNDQUFzQztBQUN0QywrQkFBK0I7QUFDL0IsNkNBQTZDO0FBQzdDLFlBQVk7QUFDWix1RUFBdUU7QUFDdkUsK0RBQStEO0FBQy9ELHFEQUFxRDtBQUNyRCxZQUFZO0FBQ1osV0FBVztBQUNYLGlEQUFpRDtBQUNqRCxvQkFBb0I7QUFDcEIsVUFBVTtBQUNWLE1BQU07QUFDTixLQUFLO0FBQ0wsRUFBRSIsImZpbGUiOiJhcHAvbW9kdWxlcy9pMThuL3NlcnZpY2VzL2kxOG4ucHJvdmlkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVFJBTlNMQVRJT05TLCBUUkFOU0xBVElPTlNfRk9STUFULCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vXG4vLyBleHBvcnQgY2xhc3MgVHJhbnNsYXRpb25Qcm92aWRlcnMge1xuLy9cbi8vICAgcHVibGljIGdldFRyYW5zbGF0aW9uRmlsZSA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xuLy8gICAgIGxldCBub1Byb3ZpZGVyczogT2JqZWN0W10gPSBbXTtcbi8vXG4vLyAgICAgLy8gRGVmaW5lIGEgd2F5IHRvIHJldHJpZXZlIHRoZSBsb2NhbCBpbmZvcm1hdGlvblxuLy8gICAgIGxldCBsb2NhbGU6IHN0cmluZyA9ICdlbi1VUyc7XG4vL1xuLy8gICAgIC8vIFNldCB0aGUgZGlyZWN0b3J5IHRvIHRoZSB0cmFuc2xhdGlvbiBmaWxlc1xuLy8gICAgIGxldCBmaWxlOiBzdHJpbmcgPSBgLi4vYXNzZXRzL2xvY2FsZS9tZXNzYWdlcy4ke2xvY2FsZX0ueGxmYDtcbi8vXG4vLyAgICAgaWYoIWxvY2FsZSB8fCBsb2NhbGUgPT09ICdlbi1VUycpIHJldHVybiBQcm9taXNlLnJlc29sdmUobm9Qcm92aWRlcnMpO1xuLy9cbi8vICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuLy8gICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdDtcbi8vICAgICAgIHhoci5vcGVuKCdHRVQnLCBmaWxlKTtcbi8vICAgICAgIHhoci5vbmxvYWQgPSAoZGF0YTogYW55KSA9PiByZXNvbHZlKFxuLy8gICAgICAgICBbXG4vLyAgICAgICAgICAgeyBwcm92aWRlOiBUUkFOU0xBVElPTlMsIHVzZVZhbHVlOiBkYXRhLnRhcmdldC5yZXNwb25zZSB9LFxuLy8gICAgICAgICAgIHsgcHJvdmlkZTogVFJBTlNMQVRJT05TX0ZPUk1BVCwgdXNlVmFsdWU6ICd4bGYnIH0sXG4vLyAgICAgICAgICAgeyBwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiBsb2NhbGUgfVxuLy8gICAgICAgICBdXG4vLyAgICAgICApO1xuLy8gICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiByZWplY3Qobm9Qcm92aWRlcnMpO1xuLy8gICAgICAgeGhyLnNlbmQoKTtcbi8vICAgICB9KTtcbi8vICAgfVxuLy8gfTtcbi8vXG4iXX0=
