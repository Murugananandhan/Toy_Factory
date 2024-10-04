
    let   Boxes = [1,0,2,0,3,4,0,5];

    let index2=0;
    for (let index = 0; index < Boxes.length; index++) {
        if (Boxes[index] != 0) {
            Boxes[index2]=Boxes[index];
          index2++;

        } 
    }
    let zero_count=0;
    while (index2<Boxes.length) {
        Boxes[index2]=0;
       index2++;
       zero_count++;
    }


    console.log(Boxes); 
    console.log(zero_count);

// Output: [1, 2, 3, 4, 5, 0, 0, 0], 3
