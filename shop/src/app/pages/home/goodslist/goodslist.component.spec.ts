import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoodslistComponent } from './goodslist.component';

describe('GoodslistComponent', () => {
  let component: GoodslistComponent;
  let fixture: ComponentFixture<GoodslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodslistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoodslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
