
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';


@Component({
    selector: 'wordreverser',
    templateUrl: './wordreverser.component.html'
})
export class WordReverserComponent {
    public response: HttpResponse;
    
     
    public wordReverserForm = this.fb.group({ 
        WordSubmitted: ["", Validators.required]        
    });

    constructor(public fb: FormBuilder, public http: Http) {}

    submitWordToBeReversed() {
        this.http.post('/api/WordReverser/ReverseWordAction', this.wordReverserForm.value).subscribe(result => {
            this.response = result.json() as HttpResponse;                   
        });
        

    }
}

interface HttpResponse {
    isSuccess: boolean;
    errorMessage: string;
    result: string;
}




