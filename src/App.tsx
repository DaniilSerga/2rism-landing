import React from 'react';

import {
    ActivitiesSection,
    DestinationSection,
    HotelsSection,
    MainSection,
    TipsSection,
} from 'sections';

function App() {
    return (
        <main>
            <MainSection />
            <DestinationSection />
            <HotelsSection />
            <TipsSection />
            <ActivitiesSection />
        </main>
    );
}

export default App;
