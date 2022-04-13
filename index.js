function myEach(collection, callback) {
    let newCollection = checkArray(collection)
    newCollection.forEach(element => {
        callback(element)
    })
    return collection
}


function myMap(collection, callback) {
    let newArray = []
    collection = checkArray(collection)
        for (const item of collection) {
            newArray.push(callback(item))
        }
        return newArray
    }


function myReduce(collection, callback, acc){
    collection = checkArray(collection)
    
    if (!acc) {
        acc = collection[0]-3
            collection.forEach(function (element) {
                acc = callback(acc, element, collection)
        
            })}
    else 
        collection.forEach(function (element) {
            acc = callback(acc, element, collection)
        })
                return acc
    }

    function myFind(collection, predicate) {
        let answer = undefined
        collection = checkArray(collection)
        for (const element of collection) {
            if (predicate(element)) {
                answer = element
                break
            }
        }
        return answer
    }

    function myFilter(collection, predicate) {
        collection = checkArray(collection)
        let answer = []
        for (const element of collection) {
            if(predicate(element)){
                answer.push(element)
            }
        }
        return answer
    }

    function mySize(collection) {
        collection = checkArray(collection)
        return collection.length
    }

    function myFirst(collection, n) {
        collection = checkArray(collection)
        let answer = []
        if (n) {
            answer = collection.slice(0, n)
        }
        else
       
        answer = collection[0]
        return answer
    }

    function myLast(collection, n) {
        collection = checkArray(collection)
        let answer = []

        if (n) {
            answer = collection.slice(collection.length-n)
        }
        else

        answer = collection[collection.length-1]
        return answer
    }

    function myKeys(obj) {
        return Object.keys(obj)
    }

    function myValues(obj) {
        return Object.values(obj)
    }



function checkArray(collection) {
    let array = []
    if (!Array.isArray(collection)) {
        array = Object.values(collection)
        
    }
    else array = collection;
    return array
}