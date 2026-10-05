/**
 * DEMO DATA — Phase 1 only. Everything in this file is replaceable by real
 * data sources; nothing else in the app should hard-code content like this.
 * Dates are relative to "today" so the demo always feels current.
 *
 * NOTE: This file is not imported anywhere in the app — it exists as a reference
 * for what demo data looked like in Phase 1. The real app uses server data via
 * the CoreProvider store.
 */
import { addDays, startOfDay } from '../lib/date';
import type { CalItem, Goal, Project, Task } from '../core/types';

const today = startOfDay(new Date());
const d = (n: number) => addDays(today, n).toISOString();
const now = (h: number, min = 0) => {
  const dt = addDays(today, 0);
  dt.setHours(h, min, 0, 0);
  return dt.toISOString();
};

export const DEMO_USER = { name: 'Vilas' };

export const demoGoals: Goal[] = [
  { id: 'g1', created_at: d(-30), updated_at: d(-1), archived_at: null, title: 'Launch the LifeOS beta', why: 'A calm system I actually use every day.', domain: 'work', horizon: 'By end of quarter', status: 'active', priority: 1, target_date: d(90), notes: null },
  { id: 'g2', created_at: d(-60), updated_at: d(-3), archived_at: null, title: 'Run a half marathon', why: 'Build a steady, sustainable base.', domain: 'fitness', horizon: 'In 4 months', status: 'active', priority: 2, target_date: d(120), notes: null },
  { id: 'g3', created_at: d(-90), updated_at: d(-7), archived_at: null, title: 'Read twelve books this year', why: 'Make slow, deep reading a habit.', domain: 'learning', horizon: 'This year', status: 'active', priority: 3, target_date: d(300), notes: null },
];

export const demoProjects: Project[] = [
  { id: 'p1', created_at: d(-20), updated_at: d(-1), archived_at: null, title: 'Design system', summary: 'Tokens, components and motion for every LifeOS surface.', domain: 'work', goal_id: 'g1', status: 'active', due_at: d(30), notes: null, blocked_reason: null },
  { id: 'p2', created_at: d(-15), updated_at: d(-2), archived_at: null, title: 'Agent experience', summary: 'Conversation, tools and confirmation flows.', domain: 'work', goal_id: 'g1', status: 'planning', due_at: d(45), notes: null, blocked_reason: null },
  { id: 'p3', created_at: d(-40), updated_at: d(-5), archived_at: null, title: 'Training plan', summary: 'Twelve-week build towards race day.', domain: 'fitness', goal_id: 'g2', status: 'active', due_at: d(60), notes: null, blocked_reason: null },
  { id: 'p4', created_at: d(-50), updated_at: d(-10), archived_at: null, title: 'Reading list', summary: 'Pick, schedule and finish one book a month.', domain: 'learning', goal_id: 'g3', status: 'paused', due_at: d(120), notes: null, blocked_reason: null },
];

export const demoTasks: Task[] = [
  { id: 't1', created_at: d(-2), updated_at: d(0), archived_at: null, title: 'Write motion guidelines', notes: 'Cover easing, durations and reduced-motion rules.', domain: 'work', priority: 'high', due_at: d(0), due_has_time: false, estimate_min: 90, actual_min: null, done_at: null, goal_id: 'g1', project_id: 'p1', milestone_id: null, deadline_id: null, parent_id: null, tags: null, recurrence: null },
  { id: 't2', created_at: d(-1), updated_at: d(0), archived_at: null, title: 'Review confirmation flow with the team', notes: null, domain: 'work', priority: 'high', due_at: d(0), due_has_time: false, estimate_min: 30, actual_min: null, done_at: null, goal_id: 'g1', project_id: 'p2', milestone_id: null, deadline_id: null, parent_id: null, tags: null, recurrence: null },
  { id: 't3', created_at: d(-1), updated_at: d(0), archived_at: null, title: 'Easy 6 km run', notes: null, domain: 'fitness', priority: 'medium', due_at: d(0), due_has_time: false, estimate_min: 45, actual_min: null, done_at: null, goal_id: 'g2', project_id: 'p3', milestone_id: null, deadline_id: null, parent_id: null, tags: null, recurrence: null },
  { id: 't4', created_at: d(0), updated_at: d(0), archived_at: null, title: 'Reply to landlord about renewal', notes: null, domain: 'personal', priority: 'medium', due_at: d(1), due_has_time: false, estimate_min: 10, actual_min: null, done_at: null, goal_id: null, project_id: null, milestone_id: null, deadline_id: null, parent_id: null, tags: null, recurrence: null },
  { id: 't5', created_at: d(-3), updated_at: d(-1), archived_at: null, title: 'Accessibility pass on navigation', notes: 'Keyboard order, focus rings, contrast.', domain: 'work', priority: 'medium', due_at: d(3), due_has_time: false, estimate_min: 60, actual_min: null, done_at: null, goal_id: 'g1', project_id: 'p1', milestone_id: null, deadline_id: null, parent_id: null, tags: null, recurrence: null },
  { id: 't6', created_at: d(-2), updated_at: d(0), archived_at: null, title: 'Plan next week’s long run route', notes: null, domain: 'fitness', priority: 'low', due_at: d(4), due_has_time: false, estimate_min: 20, actual_min: null, done_at: null, goal_id: 'g2', project_id: 'p3', milestone_id: null, deadline_id: null, parent_id: null, tags: null, recurrence: null },
  { id: 't7', created_at: d(-3), updated_at: d(0), archived_at: null, title: 'Finish chapter 6', notes: null, domain: 'learning', priority: 'low', due_at: d(2), due_has_time: false, estimate_min: 40, actual_min: null, done_at: null, goal_id: 'g3', project_id: 'p4', milestone_id: null, deadline_id: null, parent_id: null, tags: null, recurrence: null },
  { id: 't8', created_at: d(-5), updated_at: d(-1), archived_at: null, title: 'Renew passport appointment', notes: null, domain: 'personal', priority: 'high', due_at: d(-1), due_has_time: false, estimate_min: 15, actual_min: null, done_at: null, goal_id: null, project_id: null, milestone_id: null, deadline_id: null, parent_id: null, tags: null, recurrence: null },
  { id: 't9', created_at: d(-10), updated_at: d(-2), archived_at: null, title: 'Update project brief', notes: null, domain: 'work', priority: 'low', due_at: d(-2), due_has_time: false, estimate_min: 25, actual_min: 25, done_at: d(-2), goal_id: 'g1', project_id: 'p1', milestone_id: null, deadline_id: null, parent_id: null, tags: null, recurrence: null },
  { id: 't10', created_at: d(0), updated_at: d(0), archived_at: null, title: 'Book dentist', notes: null, domain: 'personal', priority: 'low', due_at: null, due_has_time: false, estimate_min: 5, actual_min: null, done_at: null, goal_id: null, project_id: null, milestone_id: null, deadline_id: null, parent_id: null, tags: null, recurrence: null },
];

export const demoCalendar: CalItem[] = [
  { source: 'event', id: 'e1', title: 'Deep work — motion guidelines', kind: 'focus', domain: 'work', start: now(9, 30), end: now(11), allDay: false },
  { source: 'event', id: 'e2', title: 'Design sync', kind: 'event', domain: 'work', start: now(11, 30), end: now(12, 15), allDay: false, place: 'Video call' },
  { source: 'event', id: 'e3', title: 'Lunch with Maya', kind: 'appointment', domain: 'relationships', start: now(13), end: now(14), allDay: false, place: 'Café Lumen' },
  { source: 'event', id: 'e4', title: 'Easy run', kind: 'focus', domain: 'fitness', start: now(18), end: now(18, 45), allDay: false },
  { source: 'deadline', id: 'e5', title: 'Landlord reply due', kind: 'deadline', domain: 'personal', start: d(1), end: null, allDay: true },
  { source: 'event', id: 'e6', title: 'Planning review', kind: 'event', domain: 'work', start: now(10), end: now(11), allDay: false },
  { source: 'deadline', id: 'e7', title: 'Motion guidelines due', kind: 'deadline', domain: 'work', start: d(5), end: null, allDay: true },
  { source: 'event', id: 'e8', title: 'Flight to Lisbon', kind: 'appointment', domain: 'travel', start: now(7, 45), end: now(10, 45), allDay: false, place: 'Terminal 2' },
  { source: 'event', id: 'e9', title: 'Training: build week begins', kind: 'event', domain: 'fitness', start: d(14), end: null, allDay: true },
  { source: 'deadline', id: 'e10', title: 'Accessibility audit due', kind: 'deadline', domain: 'work', start: d(12), end: null, allDay: true },
  { source: 'event', id: 'e11', title: 'Reading block', kind: 'focus', domain: 'learning', start: now(20), end: now(20, 45), allDay: false },
  { source: 'event', id: 'e12', title: 'Passport appointment', kind: 'appointment', domain: 'personal', start: now(15), end: now(15, 30), allDay: false, place: 'City office' },
  { source: 'event', id: 'e13', title: 'Quarterly review', kind: 'event', domain: 'work', start: now(14), end: now(15), allDay: false },
];

/** Last 7 days (oldest first) — planned vs completed task count, focus minutes. */
export const demoWeek = {
  labels: Array.from({ length: 7 }, (_, i) => addDays(today, i - 6).toLocaleDateString(undefined, { weekday: 'short' })),
  planned: [6, 5, 7, 4, 6, 3, 5],
  completed: [5, 5, 5, 4, 6, 2, 3],
  focusMin: [140, 95, 180, 120, 160, 40, 75],
};

/** Last 28 days — 1 if the day had meaningful activity. */
export const demoConsistency: number[] = [1,1,0,1,1,1,0, 1,1,1,0,1,1,0, 1,1,1,1,0,1,1, 1,0,1,1,1,1,0];

export const demoFocusHistory = [
  { id: 'f1', label: 'Write motion guidelines', minutes: 50, when: 'Yesterday, 9:40' },
  { id: 'f2', label: 'Reading block', minutes: 25, when: 'Yesterday, 20:05' },
  { id: 'f3', label: 'Accessibility pass', minutes: 45, when: '2 days ago' },
];

export const demoRecentSearches = ['motion guidelines', 'passport', 'training plan', 'Maya'];
