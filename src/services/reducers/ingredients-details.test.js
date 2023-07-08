import {
    ingredientDetailsReducer as reducer,
    initialState as state
} from './ingredients-details';
import { setIngredientDetails } from '../actions/ingredients-details';
import { ingredientMain } from '../../utils/test-constants';

describe('ingredient-details reducer test', () => {
    it('should handle set ingredient details', () => {
        expect(reducer(state, setIngredientDetails(ingredientMain)))
            .toEqual({
                ingredientDetails: ingredientMain
            })
    })
   
})