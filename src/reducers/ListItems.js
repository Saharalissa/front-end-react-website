// here let start define reduser 
//what are redusers:it is function  that accept state and action and beasd on the action type he will do some logic
 //our state will have the items as array this is why we declare empty array
 export default (ListItems =[] , action )=>{
    switch (action.type){
        // here the state (List Items) will chande besd on the action 
        case 'FETCH_ALL':
           return action.payload;   //we now we fetch that payload is oue data 'items ' so here he return it until Kow we send it to the back end and Know we need to retrive it in side Listitems component  [retrive prosess in the form ]
        case 'CREATE':
           return ListItems;
           default:
            return ListItems;
    }
}