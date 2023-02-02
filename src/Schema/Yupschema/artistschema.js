import * as Yup from 'yup';

const artistloginschema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    search: Yup.string().required('Required'),
    houseNumber: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    price: Yup.string().required('Required'),
    experience: Yup.string().required('Required'),


});
export default artistloginschema;