import Tabs from './components/Tabs';
import './App.css';
function App() {
  const tabs = [
    {
      label: 'Tab 1',
      content: 'Tab 1 content is Showing here.',
    },
    {
      label: 'Tab 2',
      content: 'Tab 2 content is Showing here.',
    },
    {
      label: 'Tab 3',
      content: 'Tab 3 content is Showing here.',
    },
  ];
  return (
    <div className="App">
      <Tabs  items={tabs} />
    </div>
  );
}

export default App;