
function filter(attraction, age, height) {
    // const isAvailable = false;
    // if (!isNaN(attraction.minAge) && !isNaN(attraction.minHeight)) {
    //     if (!isNaN(attraction.maxHeight) && age > attraction.minAge && height > attraction.minHeight && height < attraction.maxHeight) {
    //         isAvailable = true;
    //     } else if (isNaN(attraction.maxHeight) && age > attraction.minAge && height > attraction.minHeight) {
    //         isAvailable = true;
    //     } else {
    //         isAvailable = false;
    //     }
    // } else {
    //     if (age > attraction.minAge) {
    //         isAvailable = true;
    //     }
    // }

    if (!isNaN(attraction.minAge) && age < attraction.minAge) {
        return false;
    }

    if (!isNaN(attraction.maxAge) && age > attraction.maxAge) {
        return false;
    }

    if (!isNaN(attraction.minHeight) && height < attraction.minHeight) {
        return false;
    }

    if (!isNaN(attraction.maxHeight) && height > atttraction.minHeight) {
        return false;
    }

    return true;
}
