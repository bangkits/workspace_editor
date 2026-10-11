# 🏠 My 3D Workspace Designer

## ✨ What I Made

- **3D Room with Walls**: I added walls and baseboards so your setup feels like it's in a real room, not floating in space
- **Multiple Desk Options**: Choose from a classic wooden desk, a modern L-shaped desk, or a standing desk — each one changes how everything else looks
- **Chair That Actually Faces Your Monitor**: I fixed the chair position so it sits in front of the desk where you'd actually sit
- **Smart Accessory Placement**: Lamps, plants, coffee mugs, and keyboards all adjust to match your desk height automatically
- **Toggle Items On/Off**: Just click to add or remove — no complicated controls
- **Save Your Drafts**: Found a combo you love? Save it and come back later. I made it so you can keep multiple drafts and compare them
- **Everything Updates Together**: Pick a standing desk? The monitor, lamp, and plant all move up to match. No manual tweaking needed

## 🛠️ How I Built It

- **Next.js 16** with App Router — because I wanted the latest and greatest
- **Three.js + React Three Fiber** — for the 3D magic
- **Tailwind CSS** — for styling without writing a ton of custom CSS
- **TypeScript** — because I like catching bugs before they happen
- **Custom `useWorkspaceEditor` hook** — all the state logic lives here, so the UI stays clean

## 📁 How I Organized Things

```
src/
├── app/
│   └── page.tsx              # The main page where everything comes together
├── components/
│   ├── 3d/
│   │   ├── WorkspaceScene.tsx    # All the 3D models live here
│   │   └── Workspace3DViewer.tsx # The canvas setup with lighting and controls
│   └── ...
├── data/
│   └── workspace-items.ts    # Where I keep all the item definitions
├── hooks/
│   └── useWorkspaceEditor.ts # My custom hook that handles all the state
└── types/
    └── workspace.ts          # TypeScript types so I don't lose my mind
```

## 🚀 How to Run It

First, make sure you've got Node.js 18+ installed. Then:

```bash
# Grab all the dependencies
npm install

# Start the dev server
npm run dev
```

After that, just open [http://localhost:3000](http://localhost:3000) and start designing!

## 🎮 How I Use It

1. **Pick a category** from the left panel (Desks, Chairs, Monitors, or Accessories)
2. **Click an item** to add it — click again to remove it
3. **Watch the 3D room update** in real-time as you add stuff
4. **Rotate the view** by clicking and dragging — right-click to pan, scroll to zoom
5. **Save a draft** if you find a combo you like
6. **Load it back** later to compare with other setups

## 🪑 What You Can Pick

- **Desks**: Small wooden desk, L-shaped modern desk, or standing desk
- **Chairs**: Standard office chair, ergonomic with headrest, or executive leather
- **Monitors**: 24" standard or ultrawide
- **Accessories**: Desk lamp, plant, coffee mug, keyboard — mix and match as many as you want

## 🔧 Want to Add Your Own Stuff?

Just open `src/data/workspace-items.ts` and add a new entry:

```typescript
{
  id: 'my-cool-item',
  name: 'My Cool Item',
  category: 'accessories',
  icon: '🎨',
  price: 75,
  width: 60,
  height: 40
}
```

Then head over to `src/components/3d/WorkspaceScene.tsx` and add a 3D model for it. I used basic shapes (boxes, cylinders, spheres) to keep things simple, but you can get as creative as you want.

## 💡 Things I Learned

- **React Three Fiber's Canvas creates its own React root**, so you have to pass state down as props — I learned that the hard way
- **Derived state > useEffect + useState** — I used to sync props to state with useEffect, but now I just compute values directly. Way cleaner.
- **Dynamic positioning is key** — when the desk height changes, everything on it needs to move too. I solved this by passing `deskHeight` as a prop to all the accessory components.

## 📝 License

MIT — do whatever you want with it!
