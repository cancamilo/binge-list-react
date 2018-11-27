export const CalculateMedian = (array) => {
    
    const sortedArray = array.sort( (a, b) => a.rating - b.rating);
    const length = sortedArray.length;
    if( (length % 2) === 0) {
        const median = (sortedArray[(length/2) - 1] + sortedArray[(length/2)]) / 2;
        return median;
    } else if(length > 0){
        return array[(length -1)/2].rating;
    }
}