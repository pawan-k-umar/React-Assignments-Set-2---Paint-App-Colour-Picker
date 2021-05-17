import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={config.classname/* classname should come here */} onClick={() => selectNextBackground({background: background})}>
      {config.label/* label should come here */}
    </button>
  )
}
export default ColourSelector;
