import { Model, fk, attr } from "redux-orm";


export default class Pilot extends Model {
	static get fields() {
		return {
			id: attr(),
			name: attr(),
			rank: attr(),
			gunnery: attr(),
			piloting: attr(),
			age: attr(),
			mech: fk("Mech"),
		};
	}

	static parse(pilotData) {
		// We could do useful stuff in here with relations,
		// but since we have no relations yet, all we need
		// to do is pass the pilot data on to create()

		// Note that in a static class method, `this` is the
		// class itself, not an instance
		return this.upsert(pilotData);
	}

	toJSON() {
		return { ...this.ref };
	}

	updateFrom(otherPilot) {
		this.update(otherPilot.ref);
	}
}

Pilot.modelName = "Pilot";
