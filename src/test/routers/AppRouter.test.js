import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";


describe('Pruebas en <AppRouter/>', () => {
    
    const contextValue = {
    
    user: {
        logged:false,   
    }
    
    }

test('debe de mostarr el login si no esta autenticado', () => {

const wrapper = mount(

<AuthContext.Provider value={contextValue}>
     <AppRouter/>
</AuthContext.Provider>

);

expect(wrapper).toMatchSnapshot();

})    
    
    
     })

     test('debe de mostrar el componente de marvel si esta autenticado', () => {
        
        const contextValue = {
    
            user: {
                logged: true,
                name: 'Gustavo'   
            }
            
               }

        const wrapper = mount(
        
        <AuthContext.Provider value={contextValue}>
             <AppRouter/>
        </AuthContext.Provider>
        
        );
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);
        
        })    