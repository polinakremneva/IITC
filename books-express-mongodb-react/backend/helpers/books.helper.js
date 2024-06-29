function buildCriteria(query) {
    const critiria = {};
  
    if (query.genre) {
      critiria.genre = { $regex: query.genre, $options: "i" }; 
    }
 
    return critiria;
  }
  
  module.exports = { buildCriteria };
  