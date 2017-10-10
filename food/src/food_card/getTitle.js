var Hello = React.createClass({
    render: function() {
      var names = ['Jake', 'Jon', 'Thruster'];
        var namesList = names.map(function(name, index){
                  return <li key={ index }>{name}</li>;
                })

        return  <ul>{ namesList }</ul>
    }
});

ReactDOM.render(<Hello />, document.getElementById('container'));

<div className='row'>
  <div className='col-lg-2'>Humorous eats</div>
  <div className='col-lg-2'></div>
  <div className='col-lg-1'>Recipes</div>
  <div className='col-lg-1'>Techniques</div>
  <div className='col-lg-1'>Features</div>
  <div className='col-lg-1'>Editors</div>
  <div className='col-lg-2'>Kitchen Essentials</div>
  <div className='col-lg-1'>Podcasts</div>
  <div className='col-lg-1'>search</div>
</div>

