import Provider from "./Provider"

const ProviderList = ({ response, loading , filterCriteria}) => {
  const isValid = (variable) => {return typeof variable !== 'undefined' && variable};

  if(loading) {
    return (
      <div className="mt-2 grid md:grid-cols-3 gap-4 animate-pulse">
        {[...Array(5).keys()].map(num => (
          <div key={num} className="h-28 w-full bg-gray-300 m-1 rounded-sm"></div>
        ))}
      </div>
    );
  }else if(Array.isArray(response)){
    if(!isNaN(filterCriteria)){
      response = response.filter((provider) => {
        return provider.status == "verified";
      });
    }
    response = response.filter((provider) => {
       var filterCriteriaSatisfied = true;
       if(isValid(filterCriteria)){
        if(isValid(filterCriteria.search)){
          filterCriteriaSatisfied = filterCriteriaSatisfied && provider.profile.name.toUpperCase().includes(filterCriteria.search.toUpperCase())
        }
        if(isValid(filterCriteria.categories)){
          filterCriteria.categories.forEach(category =>{
            filterCriteriaSatisfied = filterCriteriaSatisfied && provider[category.key];
            });
        }
       }
      return filterCriteriaSatisfied && provider.status == "verified";
    });
  }

  if(!response.length > 0) {
    return <p className="text-center text-gray-500 text-2xl mt-20">No results found! Please modify the filter criteria.</p>
  }

  return (
    <div className="mx-2 mb-10">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {response && response.map((api, index) => <Provider api={api} key={index} />)}
      </div>
    </div>
  )
}

export default ProviderList