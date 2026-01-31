const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_001',
      name: 'Simple present tense statement',
      input: 'api naanna yanavaa',
      expected: 'අපි නාන්න යනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      
  tcId: 'Pos_Fun_002',
  name: 'Simple book request',
  input: 'mata pothak oonee',
  expected: 'මට පොතක් ඕනේ',
  category: 'Daily language usage',
  grammar: 'Simple sentence',
  length: 'S'


    },
    {
     
  tcId: 'Pos_Fun_003',
  name: 'Returning from work',
  input: 'mama kaaryaalayata yanavaa',
  expected: 'මම කාර්යාලයට යනවා',
  category: 'Daily language usage',
  grammar: 'Simple sentence',
  length: 'S'


    },
    
    // Compound Sentences
    {
      tcId: 'Pos_Fun_004',
      name: 'Talking to mother or going home',
      input: 'ammaa kathaa karanavaa, ehema naethnam mama gedhara yanavaa',
      expected: 'අම්මා කතා කරනවා, එහෙම නැත්නම් මම ගෙදර යනවා',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'After office meeting friend',
  input: 'mama kaaryaalayata giyaa passee yaaluvek hamuvuNaa',
  expected: 'මම කාර්යාලයට ගියා පස්සේ යාලුවෙක් හමුවුණා',
  category: 'Daily language usage',
  grammar: 'Compound sentence',
  length: 'S'
    },
    
    // Complex Sentences
    {
      tcId: 'Pos_Fun_006',
      name: 'Conditional complex sentence',
      input: 'thamaali mata vaedak baaradhunnoth mama eeka karannam',
      expected: 'තමාලි මට වැඩක් බාරදුන්නොත් මම ඒක කරන්නම්',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    // Questions
    {
      tcId: 'Pos_Fun_007',
      name: 'Question about monthly work progress',
      input: 'oyaa labana maasee mula sathi anthayee monavadha karanna inne?',
      expected: 'ඔයා ලබන මාසේ මුල සති අන්තයේ මොනවද කරන්න ඉන්නේ?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Question about book when happy',
      input: 'oyaa sathutin inna veleeta monavadha kiyavana poth?',
      expected: 'ඔයා සතුටින් ඉන්න වෙලේට මොනවද කියවන පොත්?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Polite request for cooking',
      input: 'oyaata mata chicken curry ekak hadhanna udhav karanna puluvandha? ',
      expected: 'ඔයාට මට chicken curry එකක් හදන්න උදව් කරන්න පුලුවන්ද?',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    
    // Commands
    {
      tcId: 'Pos_Fun_010',
      name: 'Command to open door',
      input: 'gedhara dhora vahanna',
      expected: 'ගෙදර දොර වහන්න',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Polite request to check something',
      input: 'karuNaakaralaa meeka poddak balanna puLuvandha kiyala kiyanna',
      expected: 'කරුණාකරලා මේක පොඩ්ඩක් බලන්න පුළුවන්ද කියල කියන්න',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'M'
    },
    
    // Greetings and Responses
    {
      tcId: 'Pos_Fun_012',
      name: 'Welcoming greeting',
      input: 'saadharayen piligannavaa',
      expected: 'සාදරයෙන් පිලිගන්නවා',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Casual affirmative response',
      input: 'eeka nam aeththak',
      expected: 'ඒක නම් ඇත්තක්',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Tense Variations
    {
      tcId: 'Pos_Fun_014',
      name: 'Past tense realization',
      input: 'mata  iiyee eka boruvak kiyalaa theerunaa',
      expected: 'මට  ඊයේ එක බොරුවක් කියලා තේරුනා',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Future tense casual plan',
      input: 'api heta maathara yamu muhudha balalaa raella paagalaa enna',
      expected: 'අපි හෙට මාතර යමු මුහුද බලලා රැල්ල පාගලා එන්න',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'M'
    },
    
    // Negations
    {
      tcId: 'Pos_Fun_016',
      name: 'Polite warning / refusal',
      input: 'mata kalin oyaa ehe yanna epaa',
      expected: 'මට කලින් ඔයා එහෙ යන්න එපා',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 's'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Cannot eat specific food',
      input: 'mama ee kaeema eka kanna  aasa naee',
      expected: 'මම ඒ කෑම එක කන්න  ආස නෑ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    
    // Plural and Pronouns
    {
      tcId: 'Pos_Fun_018',
      name: 'Group comment on personal cake',
      input: 'eyaalaa  kiyanavaa mama hadhana cake hangagena kanna hithenavaa kiyala',
      expected: 'එයාලා  කියනවා මම හදන cake හන්ගගෙන කන්න හිතෙනවා කියල',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'M'
    },
    // Word Combinations - Slang / Casual
    {
      tcId: 'Pos_Fun_019',
      name: 'Funny casual delay statement',
      input: 'appatasiri machan  mama thama maga ena gaman',
      expected: 'අප්පටසිරි මචන්  මම තම මග එන ගමන්',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence / slang',
      length: 'S'
    },
    
    // Mixed Language
    {
      tcId: 'Pos_Fun_020',
      name: 'WhatsApp profile not visible',
      input: 'mata WhatsApp ekee  profile photo eka pennanne  naee',
      expected: 'මට WhatsApp එකේ  profile photo එක පෙන්නන්නෙ  නෑ',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_021',
      name: 'Coffee with friend at place',
      input: 'mama Gampaha giyaa magee  best friend ekka coffee ekak  bonna',
      expected: 'මම Gampaha ගියා මගේ  best friend එක්ක coffee එකක්  බොන්න',
      category: 'Names / places / common English words',
      grammar: 'Past tense / funny / mixed',
      length: 'M'
    },
    
    // Punctuation- Funny / Casual
    {
      tcId: 'Pos_Fun_022',
      name: 'Excited suggestion to group',
      input: 'oyaalath balanna eka super ekak!',
      expected: 'ඔයාලත් බලන්න එක super එකක්!',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence / funny',
      length: 'S'
    },
    
    // Numbers and Formats - Date / Funny / Casual
    {
      tcId: 'Pos_Fun_023',
      name: 'Birthday date mention',
      input: 'apee akkaage upandhinaya august 17 venidha thibbaa',
      expected: 'අපේ අක්කාගෙ උපන්දිනය august 17 වෙනිද තිබ්බා',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence / date / funny',
      length: 'M'
    },
    
    // Large Length
    {
      tcId: 'Pos_Fun_024',
      name: 'Long casual conversation with plans',
      input: 'mama heta office yanavaa eehindhaa heta raee kanna vidhihak naee. oyaata mata raee kaeema eka evanna puluvandha? iita passe api cinema ekata yanna hithagena innavaa. ehema naethnam apee yaluvekge gedhara gihin coffee ekak biilaa aapahu enavaa ee hindhaa mathak karalaa mata kaeema eka evanna',
      expected: 'මම හෙට office යනවා ඒහින්දා හෙට රෑ කන්න විදිහක් නෑ. ඔයාට මට රෑ කෑම එක එවන්න පුලුවන්ද? ඊට පස්සෙ අපි cinema එකට යන්න හිතගෙන ඉන්නවා. එහෙම නැත්නම් අපේ යලුවෙක්ගෙ ගෙදර ගිහින් coffee එකක් බීලා ආපහු එනවා ඒ හින්දා මතක් කරලා මට කෑම එක එවන්න',
      category: 'Daily language usage',
      grammar: 'Compound / complex sentence',
      length: 'L'    
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing spaces with typo',
      input: 'mamaheta mamalaage gedharayanawa',
      expected: 'මම හෙට මාමලාගෙ ගෙදර යනවා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words - office plan',
      input: 'apipansalatayannnahithninnawa',
      expected: 'අපි පන්සලට යන්න හිතන් ඉන්නවා',
      category: 'Typographical error handling',
      grammar: 'Future tense / compound',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed spacing issues',
      input: 'mata    pahala gedharata  yanna oone',
      expected: 'මට පහල ගෙදරට යන්න ඕනෙ',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: 'mama adha kaeema kaeevee naethi nisaa bada ridhenavaa ',
      expected: 'මම අද කෑම කෑවේ\n නැති නිසා බඩ රිදෙනවා ',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Informal slang phrase',
      input: 'ee machaang ee kaeema eka patta rasayineee',
      expected: 'ඒ මචාන්ග  ඒ කෑම එක පට්ට රසයිනේ',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Colloquial expression',
      input: 'adoo ban arayaa kavudha',
      expected: 'අඩෝඕ බන් අරයා කවුද',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed English with errors',
      input: 'apizoommeetingekatayanavaaheta',
      expected: 'අපි zoom meeting එකට යනවා හෙට',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Abbreviation in sentence',
      input: 'mama FB eke status upload karala thiyenawa',
      expected: 'මම FB එකේ status upload කරලා තියෙනවා',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: 'oyaagebaappaahetameheeenavadha',
      expected: 'ඔයාගෙ බාප්පා හෙට මෙහේ එනවද',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: 'eyi bro oyaage vaedeth karala mata diipan',
      expected: 'එයි bro ඔයාගෙ වැඩෙත් කරල මට දීපන්',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mata  iiyee eka boruvak kiyalaa theerunaa',
    partialInput: 'mata  iiyee eka',
    expectedFull: 'මට  ඊයේ එක බොරුවක් කියලා තේරුනා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});