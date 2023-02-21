import * as renderer from 'react-test-renderer';
import { Leaderboard } from './Leaderboard'
import { renderWithProviders } from '../../utils/configureStore'
import { setupStore } from '../../store'
import { Provider } from 'react-redux'
import { getPreloadedState } from '../../utils/preloadedStore'


  test ('renders correctly', () =>{
    const tree = renderer
      .create(renderWithProviders(<Leaderboard />))
      // .create(<Provider store={setupStore(getPreloadedState())}><Leaderboard/></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();

    // const {asFragment} = render(<Leaderboard/>)
    // const firstRender = asFragment()
    // expect(firstRender).toMatchSnapshot(asFragment())

  })

