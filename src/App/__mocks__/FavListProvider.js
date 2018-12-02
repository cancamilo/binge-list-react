
const context = {
    favList: [],
    addFavorite: jest.fn(),
    removeFavorite: jest.fn(),
    isFav: jest.fn()
}

export const MyContext = ({
    Consumer(props) {
      return props.children(context)
    } 
})