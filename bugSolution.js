```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const logCount = () => {
      console.log('Count changed:', count);
    };
    logCount();
    // Correct: return a cleanup function
    return () => {
      // Perform cleanup here if necessary
      console.log('Cleanup function ran');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```