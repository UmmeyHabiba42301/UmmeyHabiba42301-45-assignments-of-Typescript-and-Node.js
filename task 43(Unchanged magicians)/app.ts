/*(Unchanged Magicians: Start with your work from Exercise 40.
     Call the function make_great() with a copy of the array of magicians’ names.
      Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that
 you have one array of the original names and one array with the Great added to each magician’s name.)*/

 function make_great2(Magicians: string[]): string[]{
      const greatMagicians : string[] =[];
      for (let i = 0; i < Magicians.length; i++){
            greatMagicians.push(Magicians[i] + '  the great');
      }
      return greatMagicians;
 }
 function show_magicians(magicians: string[]) {
      magicians.forEach((name) => console.log(name));
    }
 
 const magicians3: string[] = ['ali', 'ahmed', 'mohsin', 'ayan'];
 const greatMagicians2: string[] = make_great2(magicians3);
 show_magicians(magicians3);
 show_magicians(greatMagicians2);