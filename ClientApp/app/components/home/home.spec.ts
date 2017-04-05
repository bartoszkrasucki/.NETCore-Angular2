/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { HomeComponent } from './home.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';


let fixture: ComponentFixture<HomeComponent>;

describe('Home component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [HomeComponent] });
        fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
    });

    it('should display a title', async(() => {
        const titleText = fixture.nativeElement.querySelector('h2').textContent;
        expect(titleText).toEqual('Welcome!');
    }));
});
