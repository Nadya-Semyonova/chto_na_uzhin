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
import defaultImage from '../shared/assets/images/default.jpg';
// База рецептов
export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Паста Карбонара',
    category: 'Итальянская кухня',
    imageUrl: defaultImage,
    instructions:
      'Отварите спагетти в подсоленной воде. Обжарьте бекон с чесноком. Смешайте яйца с сыром пармезан. Соедините горячие спагетти с беконом, добавьте яичную смесь и быстро перемешайте. Подавайте сразу же с черным перцем.',
    ingredients: ['спагетти', 'яйца', 'бекон', 'пармезан', 'чеснок', 'черный перец'],
    cookingTime: 20,
    difficulty: 'Средне',
  },
  {
    id: '2',
    title: 'Омлет с овощами',
    category: 'Завтрак',
    imageUrl: defaultImage,
    instructions:
      'Взбейте яйца с молоком. Нарежьте помидоры и перец кубиками. Обжарьте овощи на сковороде, залейте яичной смесью. Готовьте под крышкой 5-7 минут.',
    ingredients: ['яйца', 'молоко', 'помидоры', 'болгарский перец', 'лук', 'соль'],
    cookingTime: 15,
    difficulty: 'Легко',
  },
  {
    id: '3',
    title: 'Греческий салат',
    category: 'Салаты',
    imageUrl: defaultImage,
    instructions:
      'Нарежьте помидоры, огурцы и перец крупными кусками. Добавьте маслины и сыр фета. Заправьте оливковым маслом и посыпьте орегано.',
    ingredients: ['помидоры', 'огурцы', 'болгарский перец', 'лук', 'сыр фета', 'оливки', 'оливковое масло'],
    cookingTime: 10,
    difficulty: 'Легко',
  },
  {
    id: '4',
    title: 'Гречка с грибами',
    category: 'Вегетарианское',
    imageUrl: defaultImage,
    instructions:
      'Отварите гречку. Обжарьте лук с грибами. Смешайте с гречкой, добавьте сливочное масло.',
    ingredients: ['гречка', 'грибы', 'лук', 'сливочное масло', 'соль'],
    cookingTime: 25,
    difficulty: 'Легко',
  },
  {
    id: '5',
    title: 'Борщ',
    category: 'Суп',
    imageUrl: defaultImage,
    instructions:
      'Сварите мясной бульон. Обжарьте свеклу, морковь и лук. Добавьте в бульон нарезанный картофель и капусту, затем зажарку. Варите до готовности. Подавайте со сметаной и зеленью.',
    ingredients: ['свекла', 'капуста', 'картофель', 'морковь', 'лук', 'говядина', 'томатная паста', 'сметана'],
    cookingTime: 90,
    difficulty: 'Сложно',
  },
  {
    id: '6',
    title: 'Сэндвич с курицей и авокадо',
    category: 'Закуски',
    imageUrl: defaultImage,
    instructions:
      'Поджарьте тосты. Смажьте их авокадо, размятым в пюре. Выложите листья салата, ломтики обжаренной курицы и помидоры. Накройте второй половинкой.',
    ingredients: ['хлеб', 'куриное филе', 'авокадо', 'помидор', 'листья салата', 'майонез'],
    cookingTime: 15,
    difficulty: 'Легко',
  },
  {
    id: '7',
    title: 'Цезарь с креветками',
    category: 'Салаты',
    imageUrl: defaultImage,
    instructions:
      'Обжарьте креветки с чесноком. Нарежьте салат романо или айсберг и смешайте с соусом Цезарь. Добавьте сухарики и креветки. Посыпьте пармезаном.',
    ingredients: ['креветки', 'салат романо', 'пармезан', 'сухарики', 'соус цезарь', 'чеснок'],
    cookingTime: 20,
    difficulty: 'Средне',
  },
  {
    id: '8',
    title: 'Плов с курицей',
    category: 'Основные блюда',
    imageUrl: defaultImage,
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
    imageUrl: defaultImage,
    instructions:
      'Смешайте яйцо, овсяные хлопья и молоко в блендере. Вылейте на разогретую сковороду. Жарьте с двух сторон. Начинка: творог, банан или сыр.',
    ingredients: ['овсяные хлопья', 'яйцо', 'молоко', 'творог', 'банан'],
    cookingTime: 10,
    difficulty: 'Легко',
  },
  {
    id: '10',
    title: 'Капрезе',
    category: 'Салаты',
    imageUrl: defaultImage,
    instructions:
      'Нарежьте помидоры и моцареллу кружочками. Выложите, чередуя, на тарелку. Сбрызните оливковым маслом, добавьте листья базилика и бальзамический уксус.',
    ingredients: ['помидоры', 'моцарелла', 'базилик', 'оливковое масло', 'бальзамический уксус'],
    cookingTime: 5,
    difficulty: 'Легко',
  },
  {
    id: '11',
    title: 'Фаршированные перцы',
    category: 'Основные блюда',
    imageUrl: defaultImage,
    instructions:
      'Обжарьте лук и морковь, отварите рис. Смешайте фарш с отварным рисом, луком и морковью. Начините болгарские перцы. Полейте томатным соусом или соком и тушите 40-50 минут.',
    ingredients: ['болгарский перец', 'фарш', 'рис', 'лук', 'морковь', 'томатный сок'],
    cookingTime: 60,
    difficulty: 'Средне',
  },
  {
    id: '12',
    title: 'Брауни',
    category: 'Десерты',
    imageUrl: defaultImage,
    instructions:
      'Растопите шоколад со сливочным маслом на водяной бане или в микроволновке. Взбейте яйца с сахаром. Соедините смеси, добавьте муку. Выпекайте 25 минут. При проверке зубочисткой середина должна остаться влажной.',
    ingredients: ['темный шоколад', 'сливочное масло', 'сахар', 'яйца', 'мука'],
    cookingTime: 35,
    difficulty: 'Средне',
  },
  {
    id: '13',
    title: 'Суп-пюре из тыквы',
    category: 'Суп',
    imageUrl: defaultImage,
    instructions:
      'Обжарьте лук и тыкву с чесноком. Добавьте бульон и варите до мягкости. Измельчите блендером. Влейте сливки и прогрейте. Подавайте с тыквенными семечками.',
    ingredients: ['тыква', 'лук', 'чеснок', 'сливки', 'куриный бульон', 'тыквенные семечки'],
    cookingTime: 30,
    difficulty: 'Легко',
  },
  {
    id: '14',
    title: 'Сырники',
    category: 'Завтрак',
    imageUrl: defaultImage,
    instructions:
      'Смешайте творог, яйцо, муку и сахар. Сформируйте сырники. Обжарьте на сливочном масле с двух сторон до румяной корочки.',
    ingredients: ['творог', 'яйцо', 'мука', 'сахар'],
    cookingTime: 20,
    difficulty: 'Легко',
  },
  {
    id: '15',
    title: 'Ризотто с грибами',
    category: 'Итальянская кухня',
    imageUrl: defaultImage,
    instructions:
      'Обжарьте лук и рис арборио. Постепенно добавляйте бульон, помешивая, после того как рис набухнет, добавьте стакан белого вина до полного выпаривания. В конце добавьте отдельно обжаренные грибы, пармезан и сливочное масло.',
    ingredients: ['рис арборио', 'шампиньоны', 'лук', 'белое вино', 'пармезан', 'бульон'],
    cookingTime: 35,
    difficulty: 'Средне',
  },
  {
    id: '16',
    title: 'Окрошка',
    category: 'Суп',
    imageUrl: defaultImage,
    instructions:
      'Нарежьте кубиками варенный картофель, свежие огурцы, редис, варенные яйца и докторскую колбасу. Залейте квасом или кефиром. Добавьте горчицу, хрен и зелень.',
    ingredients: ['квас', 'картофель', 'огурцы', 'редис', 'яйца', 'колбаса', 'укроп', 'горчица', 'хрен'],
    cookingTime: 20,
    difficulty: 'Легко',
  },
  {
    id: '17',
    title: 'Картофель по-деревенски',
    category: 'Гарнир',
    imageUrl: defaultImage,
    instructions:
      'Нарежьте картофель дольками. Смешайте с растительным маслом, паприкой, чесноком и солью. Запекайте в духовке 35 минут до хрустящей корочки.',
    ingredients: ['картофель', 'растительное масло', 'паприка', 'чеснок', 'розмарин'],
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
