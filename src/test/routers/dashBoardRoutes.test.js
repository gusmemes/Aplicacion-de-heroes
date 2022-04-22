import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/AuthContext"
import { DashBoardRoutes } from "../../routers/DashBoardRoutes"


describe('pruebas en <dashBoardRoutes />', () => {

const contextValue = {

    user: {
        logged: true,
        name: 'Gustavo'

    }
}

    test('Debe de mostrarse correctamente - Marvel', () => {
    
        const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={['/']}>
             <DashBoardRoutes/>
          </MemoryRouter>
        </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Gustavo');
        expect(wrapper.find('h1').text().trim()).toBe('MarvelScreen');

        
         })

         test('Debe de mostrarse correctamente de DC', () => {
    
            const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
              <MemoryRouter initialEntries={['/DC']}>
                 <DashBoardRoutes/>
              </MemoryRouter>
            </AuthContext.Provider>
            );
    
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('h1').text().trim()).toBe('DcScreen');
    
    
     })
     })

    