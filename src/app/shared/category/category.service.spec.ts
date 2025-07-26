import { TestBed } from '@angular/core/testing';
import { CategoryService } from './category.service';
import { Firestore } from '@angular/fire/firestore/lite';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(() => {
    const firestoreStub = {
      
    };

    TestBed.configureTestingModule({
      providers: [
        CategoryService,
        { provide: Firestore, useValue: firestoreStub }
      ]
    });

    service = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
