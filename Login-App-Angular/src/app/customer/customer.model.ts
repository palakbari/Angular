import { FormGroup, FormControl, Validator, FormBuilder, Validators} from "@angular/forms";

export class Customer
{
    id : string;
    CName : string;
    Amount : number;
    Email : string
    formCustomerGroup : FormGroup;

    constructor()
    {
        var _builder = new FormBuilder();
        this.formCustomerGroup = _builder.group({});
        
        var idvalidationcollection = [Validators.pattern("[0-9]{2,2}$")];
        this.formCustomerGroup.addControl("CustomerIdControl", new FormControl('', Validators.compose(idvalidationcollection)));

        this.formCustomerGroup.addControl("CustomerNameControl", new FormControl('', Validators.required));
        
        var emailvalidationcollection = [Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")];
        this.formCustomerGroup.addControl("CustomerEmailControl", new FormControl('', Validators.compose(emailvalidationcollection)));
    }
}



