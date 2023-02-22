// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate(){
      let newDna;
      let same = true;
      switch(this.dna){
        case 'A':
          do{
            newDna = returnRandBase();
            if (this.dna !== newDna){
              same = false;
            }
          } while (same);
          break;
        case 'T':
          do{
            newDna = returnRandBase();
            if (this.dna !== newDna){
              same = false;
            }
          } while (same)
          break;
        case 'C':
          do{
            newDna = returnRandBase();
            if (this.dna !== newDna){
              same = false;
            }
          } while (same);
          break;
        case 'G':
          do{
            newDna = returnRandBase();
            if (this.dna !== newDna){
              same = false;
            }
          } while (same);
          break;
        default:
          console.log('This is awkward...');
          break;               
      }
    },
    compareDNA(pAequor){
      let compare = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(pAequor.dna[i] === this.dna[i]){
          compare++;
        }
      }
      compare *= 100;
      compare /= this.dna.length;

      return `Specimen #1 and Specimen #2 have ${compare}% DNA in common.`;
    },
  }
}

let newSpec = pAequorFactory(10, []);






