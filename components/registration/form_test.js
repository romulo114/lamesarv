import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

export default function Example() {
    return (
        <div>

            <form 
            method="POST" 
            action="https://lamesarv.activehosted.com/proc.php" 
            className="email-form fluid-fields" 
            cr-attached="true" >

            <input type="hidden" name="u" defaultValue="15" />
            <input type="hidden" name="f" defaultValue="15" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" defaultValue="0" />
            <input type="hidden" name="m" defaultValue="0" />
            <input type="hidden" name="act" defaultValue="sub" />
            <input type="hidden" name="v" defaultValue="2" />

            <input type="hidden" name="field[21]" defaultValue="field21" />
            <input type="hidden" name="field[22]" defaultValue="field22" />

            <input type="hidden" name="field[5]" defaultValue="field5" />
            <input type="hidden" name="field[7]" defaultValue="field7" />
            <input type="hidden" name="field[8]" defaultValue="field8" />
            <input type="hidden" name="field[9]" defaultValue="field9" />
            <input type="hidden" name="field[10]" defaultValue="field10" />
            <input type="hidden" name="field[11]" defaultValue="field11" />

            <div className="row">
                <div className="col-sm-6">
                    <div className="labelDiv required">*
                        <label htmlFor="firstname">First Name</label>
                    </div>
                    <div className="form-group">
                        <input 
                            className="lmrv-input 
                            form-control" 
                            data-val="true" 
                            data-val-required="First Name is required" 
                            id="firstname" 
                            name="firstname" 
                            type="text" 
                            defaultValue="" 
                            //style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: pointer;" 
                        />

                        <span className="field-validation-valid" 
                            data-valmsg-for="firstname" 
                            data-valmsg-replace="true">
                        </span>
                    
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="labelDiv required">*<label htmlFor="lastname">Last Name</label></div>
                    <div className="form-group">
                        <input 
                            className="lmrv-input form-control" 
                            data-val="true" 
                            data-val-required="Last Name is required" 
                            id="lastname" 
                            name="lastname" 
                            type="text" 
                            defaultValue=""
                        /> 

                        <span className="field-validation-valid" 
                            data-valmsg-for="lastname" 
                            data-valmsg-replace="true">
                        </span>
                    </div>
                </div>
            </div>
                
            <h3 className="mt-1" >Contact Information</h3>
                
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="labelDiv"> <label htmlFor="phone">Telephone</label></div>
                    <div className="form-group">
                        <input 
                            className="lmrv-input form-control" 
                            id="phone" 
                            name="phone" 
                            placeholder="(000) 000-0000" 
                            type="text" 
                            defaultValue="" />
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="labelDiv"> <label htmlFor="field[19]">Mobile Phone</label></div>
                    <div className="form-group">
                        <input 
                            className="lmrv-input 
                            form-control" 
                            id="field[19]" 
                            name="field[19]" 
                            placeholder="(000) 000-0000" 
                            type="text" 
                            defaultValue=""
                        />
                    </div>
                </div>

                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="labelDiv required">*<label htmlFor="email">Email</label></div>
                    <div className="form-group">
                        <input 
                            className="lmrv-input form-control" 
                            data-val="true" 
                            data-val-email="Please enter a valid email address" 
                            data-val-required="Email is required" 
                            id="email" 
                            name="email" 
                            type="text" 
                            defaultValue=""
                            pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$" 
                        /> 
                        <span className="field-validation-valid" 
                            data-valmsg-for="email" 
                            data-valmsg-replace="true">
                        </span>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="labelDiv required">*<label htmlFor="field[15]">Zip Code</label></div>
                    <div className="form-group">
                        <input className="lmrv-input 
                            form-control" 
                            data-val="true" 
                            data-val-required="Zip Code is required" 
                            id="field[15]" 
                            name="field[15]" 
                            type="text" 
                            defaultValue=""
                        />
                    </div>
                </div>
            </div>
                
            <div className="row">
                <div className="col-sm-12">
                    <div className="labelDiv"><label htmlFor="field[20]">Comments</label></div>
                    <div className="form-group mt-2" >
                        <textarea className="lmrv-input form-control" 
                            cols="30" 
                            id="field[20]" 
                            name="field[20]" 
                            rows="6"></textarea>
                    </div>
                </div>

                <div className="col-sm-12">
                    <div className="required-indicator mt-1">
                        <span className="text-red">*</span> - Indicates a required field
                    </div>
                </div>
            </div>
                
            <input type="submit" 
                    className="blue-button email-submit" 
                    defaultValue="Submit" />
        </form>
        </div>
    )
}
