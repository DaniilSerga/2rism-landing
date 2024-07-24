import React from 'react';

import {Footer} from 'components';
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
            <Footer />
        </main>
    );
}

export default App;
