import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFavoritesArticlesComponent } from './profile-favorites-articles.component';

describe('ProfileFavoritesArticlesComponent', () => {
  let component: ProfileFavoritesArticlesComponent;
  let fixture: ComponentFixture<ProfileFavoritesArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFavoritesArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFavoritesArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
