import {SuccessfulApiResponse} from "../generalResponses/SuccessfulApiResponse.js";

export class GetUsersSuccessful extends SuccessfulApiResponse {
    
    static defaultResponse() {
        return {
                "page": 2,
                "total": 4,
                "users": [
                            {
                                "display_name": "Javier Hernán Ferreyra Iañez",
                                "email": "jferreyra@fi.uba.ar",
                                "id": 31,
                                "image_location": "https://lh3.googleusercontent.com/a-/AOh14GjDHomHBUWDx2YJPj91WaxAytc2qzBTs2EXz6aI=s96-c",
                                "phone_number": null
                            },
                            {
                                "display_name": "Franco fiubense",
                                "email": "fgiordano@fi.uba.ar",
                                "id": 29,
                                "image_location": "https://image.freepik.com/foto-gratis/playa-tropical_74190-188.jpg",
                                "phone_number": "+542323232323"
                            }
                        ]
        }
    }

    usersData() {
        const data = this.content()['users'];
        return data
    }
}