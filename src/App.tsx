import React from 'react';

import {
    AboutUsSection,
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
            <AboutUsSection />
        </main>
    );
}

export default App;
