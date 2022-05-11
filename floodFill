/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

var floodFill = function(image, sr, sc, newColor) {
    // start at sr sc
    let searchColor = image[sr][sc];
    image[sr][sc] = newColor;
    
    // optional conditional
    if (newColor == searchColor)
        return image; 
    
    // loop thru grid, check 4 directions
    // Left
    if (sr > 0 && image[sr - 1][sc] == searchColor) {
        floodFill(image, sr - 1, sc, newColor);
    } 
    
    // Up
    if (sc > 0 && image[sr][sc - 1] == searchColor) {
        floodFill(image, sr, sc - 1, newColor);
    }
    
    // Down
    if (sr < image.length -1 && image[sr + 1][sc] == searchColor) {
        floodFill(image, sr + 1, sc, newColor);
    }
    
    // Right
    if (sc < image[0].length -1 && image[sr][sc+1] == searchColor) {
        floodFill(image, sr, sc+1, newColor);        
    }
    return image;
};
