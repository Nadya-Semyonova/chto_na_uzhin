export interface Recipe {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  instructions: string;
  ingredients: string[]; // массив id ингредиентов
  cookingTime?: number; // в минутах
  difficulty?: 'Легко' | 'Средне' | 'Сложно';
}
import defaultImage from '../shared/assets/images/default.png';
import cezarImage from '../shared/assets/images/saladcezar.jpg';
import grecheskiiImage from '../shared/assets/images/grecheskii.jpg';
import grechkasgribamiImage from '../shared/assets/images/grechka_s_gribami.jpg';
import kaprezeImage from '../shared/assets/images/kapreze.jpg';
import karbonaraImage from '../shared/assets/images/karbonara.jpg';
import omletImage from '../shared/assets/images/omlet.jpg';
import ovsyanoblinImage from '../shared/assets/images/ovsyanoblin.jpg';
import percyImage from '../shared/assets/images/percy.jpg';
import plovImage from '../shared/assets/images/plov.jpg';
import sandwichImage from '../shared/assets/images/sendwich.jpg';
import borshImage from '../shared/assets/images/borsh.jpg';
import brauniImage from '../shared/assets/images/brauni.jpg';
import pumpkinImage from '../shared/assets/images/pumpkinsoup.jpg';
import syrnikiImage from '../shared/assets/images/syrniki.jpg';
import rizottoImage from '../shared/assets/images/rizotto.jpg';
import okroshkaImage from '../shared/assets/images/okroshka.jpg';
import kartofelImage from '../shared/assets/images/kartofel.jpg';
// База рецептов
export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Паста Карбонара',
    category: 'Итальянская кухня',
    imageUrl: karbonaraImage,
    instructions:
      'Отварите спагетти в подсоленной воде. Обжарьте бекон с чесноком. Смешайте яйца с сыром пармезан. Соедините горячие спагетти с беконом, добавьте яичную смесь и быстро перемешайте. Подавайте сразу же с черным перцем.',
    ingredients: ['макароны', 'яйца', 'бекон', 'сыр', 'чеснок'],
    cookingTime: 20,
    difficulty: 'Средне',
  },
  {
    id: '2',
    title: 'Омлет с овощами',
    category: 'Завтрак',
    imageUrl: omletImage,
    instructions:
      'Взбейте яйца с молоком. Нарежьте помидоры и перец кубиками. Обжарьте овощи на сковороде, залейте яичной смесью. Готовьте под крышкой 5-7 минут.',
    ingredients: ['яйца', 'молоко', 'помидор', 'болгарский перец', 'лук'],
    cookingTime: 15,
    difficulty: 'Легко',
  },
  {
    id: '3',
    title: 'Греческий салат',
    category: 'Салаты',
    imageUrl: grecheskiiImage,
    instructions:
      'Нарежьте помидоры, огурцы и перец крупными кусками. Добавьте маслины и сыр фета. Заправьте оливковым маслом и посыпьте орегано.',
    ingredients: ['помидор', 'огурец', 'болгарский перец', 'лук', 'сыр', 'оливки'],
    cookingTime: 10,
    difficulty: 'Легко',
  },
  {
    id: '4',
    title: 'Гречка с грибами',
    category: 'Вегетарианское',
    imageUrl: grechkasgribamiImage,
    instructions:
      'Отварите гречку. Обжарьте лук с грибами. Смешайте с гречкой, добавьте сливочное масло.',
    ingredients: ['гречка', 'грибы', 'лук'],
    cookingTime: 25,
    difficulty: 'Легко',
  },
  {
    id: '5',
    title: 'Борщ',
    category: 'Суп',
    imageUrl: borshImage,
    instructions:
      'Сварите мясной бульон. Обжарьте свеклу, морковь и лук. Добавьте в бульон нарезанный картофель и капусту, затем зажарку. Варите до готовности. Подавайте со сметаной и зеленью.',
    ingredients: ['свекла', 'капуста', 'картофель', 'морковь', 'лук', 'говядина', 'томатная паста'],
    cookingTime: 90,
    difficulty: 'Сложно',
  },
  {
    id: '6',
    title: 'Сэндвич с курицей и авокадо',
    category: 'Закуски',
    imageUrl: sandwichImage,
    instructions:
      'Поджарьте тосты. Смажьте их авокадо, размятым в пюре. Выложите листья салата, ломтики обжаренной курицы и помидоры. Накройте второй половинкой хлеба.',
   ingredients: ['хлеб', 'курица', 'авокадо', 'помидор', 'салат', 'майонез'],
    cookingTime: 15,
    difficulty: 'Легко',
  },
  {
    id: '7',
    title: 'Цезарь с креветками',
    category: 'Салаты',
    imageUrl: cezarImage,
    instructions:
      'Обжарьте креветки с чесноком. Добавьте в майонез, чайную ложку горчицы. Нарежьте салат романо или айсберг и смешайте с соусом. Добавьте помидоры черри, сухарики и креветки. Посыпьте пармезаном.',
    ingredients: ['креветки', 'салат', 'сыр', 'сухарики', 'майонез', 'горчица', 'помидор'],
    cookingTime: 20,
    difficulty: 'Средне',
  },
  {
    id: '8',
    title: 'Плов с курицей',
    category: 'Основные блюда',
    imageUrl: plovImage,
    instructions:
      'Обжарьте курицу до корочки минут 10. Добавьте лук и морковь и обжаривайте еще 10 мин. Всыпьте рис, залейте кипятком, сверху положите пару зубчиков чеснока, добавьте соль, перец по вкусу и специи для плова. Томите под крышкой, пока рис не впитает воду.',
    ingredients: ['рис', 'курица', 'морковь', 'лук', 'чеснок'],
    cookingTime: 70,
    difficulty: 'Средне',
  },
  {
    id: '9',
    title: 'Овсяноблин',
    category: 'Завтрак',
    imageUrl: ovsyanoblinImage,
    instructions:
      'Смешайте яйцо, овсяные хлопья и молоко в блендере. Вылейте на разогретую сковороду. Жарьте с двух сторон. Начинка: творог, банан или сыр.',
    ingredients: ['овсяные хлопья', 'яйца', 'молоко', 'творог', 'банан'],
    cookingTime: 10,
    difficulty: 'Легко',
  },
  {
    id: '10',
    title: 'Капрезе',
    category: 'Салаты',
    imageUrl: kaprezeImage,
    instructions:
      'Нарежьте помидоры и сыр моцарелла кружочками. Выложите, чередуя, на тарелку. Сбрызните оливковым маслом, добавьте листья базилика и бальзамический уксус.',
   ingredients: ['помидор', 'сыр', 'базилик'],
    cookingTime: 5,
    difficulty: 'Легко',
  },
  {
    id: '11',
    title: 'Фаршированные перцы',
    category: 'Основные блюда',
    imageUrl: percyImage,
    instructions:
      'Обжарьте лук и морковь, отварите рис. Смешайте фарш с отварным рисом, луком и морковью. Начините болгарские перцы. Полейте томатным соусом или соком и тушите 40-50 минут.',
    ingredients: ['болгарский перец', 'фарш', 'рис', 'лук', 'морковь', 'томатная паста'],
    cookingTime: 60,
    difficulty: 'Средне',
  },
  {
    id: '12',
    title: 'Брауни',
    category: 'Десерты',
    imageUrl: brauniImage,
    instructions:
      'Растопите шоколад со сливочным маслом на водяной бане или в микроволновке. Взбейте яйца с сахаром. Соедините смеси, добавьте муку. Выпекайте 25 минут. При проверке зубочисткой середина должна остаться влажной.',
ingredients: ['шоколад', 'яйца', 'мука'],
    cookingTime: 35,
    difficulty: 'Средне',
  },
  {
    id: '13',
    title: 'Суп-пюре из тыквы',
    category: 'Суп',
    imageUrl: pumpkinImage,
    instructions:
      'Сварите куринный бульон. Обжарьте лук и тыкву с чесноком. Добавьте бульон и варите до мягкости. Измельчите блендером. Влейте сливки и прогрейте. Поджарьте хлеб и покрошите его на сухарики, подавайте суп с сухариками.',
    ingredients: ['тыква', 'лук', 'чеснок', 'сливки', 'курица', 'хлеб'],
    cookingTime: 30,
    difficulty: 'Легко',
  },
  {
    id: '14',
    title: 'Сырники',
    category: 'Завтрак',
    imageUrl: syrnikiImage,
    instructions:
      'Смешайте творог, яйцо, муку и сахар. Сформируйте сырники. Обжарьте на сливочном масле с двух сторон до румяной корочки.',
 ingredients: ['творог', 'яйца', 'мука'],
    cookingTime: 20,
    difficulty: 'Легко',
  },
  {
    id: '15',
    title: 'Ризотто с грибами',
    category: 'Итальянская кухня',
    imageUrl: rizottoImage,
    instructions:
      'Сварите куринный больон. Обжарьте лук и рис арборио. Постепенно добавляйте бульон, помешивая, после того как рис набухнет, можно добавить стакан белого сухого вина до полного выпаривания. В конце добавьте отдельно обжаренные грибы, пармезан и сливочное масло.',
   ingredients: ['рис', 'грибы', 'лук', 'вино', 'сыр', 'курица'],
    cookingTime: 35,
    difficulty: 'Средне',
  },
  {
    id: '16',
    title: 'Окрошка',
    category: 'Суп',
    imageUrl: okroshkaImage,
    instructions:
      'Нарежьте кубиками варенный картофель, свежие огурцы, редис, варенные яйца и докторскую колбасу. Залейте квасом или кефиром. Добавьте горчицу, хрен и зелень.',
    ingredients: ['квас', 'картофель', 'огурец', 'редис', 'яйца', 'колбаса', 'горчица', 'хрен'],
    cookingTime: 20,
    difficulty: 'Легко',
  },
  {
    id: '17',
    title: 'Картофель по-деревенски',
    category: 'Гарнир',
    imageUrl: kartofelImage,
    instructions:
      'Нарежьте картофель дольками. Смешайте с растительным маслом, паприкой, чесноком и солью. Запекайте в духовке 35 минут до хрустящей корочки.',
   ingredients: ['картофель', 'чеснок'],
    cookingTime: 40,
    difficulty: 'Легко',
  },
];

// Функция для получения рецепта по ингредиентам
export const findRecipeByIngredients = (
  selectedIngredients: string[],
  recipes: Recipe[] = RECIPES
): Recipe | null => {
  if (selectedIngredients.length === 0) return null;

  // Находим рецепты, которые можно приготовить из выбранных ингредиентов
  const possibleRecipes = recipes.filter((recipe) => {
    // Проверяем, есть ли все необходимые ингредиенты в холодильнике
    return recipe.ingredients.every((ingredient) => selectedIngredients.includes(ingredient));
  });

  if (possibleRecipes.length === 0) {
    // Если нет точных совпадений, ищем рецепты с максимальным совпадением
    return findBestMatchingRecipe(selectedIngredients, recipes);
  }

  // Возвращаем случайный рецепт из возможных
  return possibleRecipes[Math.floor(Math.random() * possibleRecipes.length)];
};

// Функция для поиска рецепта с максимальным совпадением ингредиентов
export const findBestMatchingRecipe = (
  selectedIngredients: string[],
  recipes: Recipe[] = RECIPES
): Recipe | null => {
  if (selectedIngredients.length === 0) return null;

  let bestRecipe: Recipe | null = null;
  let maxMatches = 0;

  recipes.forEach((recipe) => {
    const matches = recipe.ingredients.filter((ingredient) =>
      selectedIngredients.includes(ingredient)
    ).length;

    if (matches > maxMatches) {
      maxMatches = matches;
      bestRecipe = recipe;
    }
  });

  return bestRecipe;
};

// Функция для получения случайного рецепта
export const getRandomRecipe = (recipes: Recipe[] = RECIPES): Recipe => {
  return recipes[Math.floor(Math.random() * recipes.length)];
};
