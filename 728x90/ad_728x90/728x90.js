(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SantanderInternationalpos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC0000").s().p("AM7GsQgVgZAAgtQAAgvAXgZQAYgZAuAAQAgABAbAJIAACxIgXAAIgBgPQgUATgbgBQgmAAgWgXgANPEvQgQATAAAkQAAAiAOAUQAPATAdAAQAaAAATgSIAAh+QgRgDgSAAQgiAAgSATgAG1GpQgWgZAAgqQAAgtAXgaQAXgaApAAQAqAAAWAbQAVAZAAAqQAAAtgWAZQgYAagpAAQgpAAgWgagAHIEwQgQASAAAiQAAAjAQAUQAPASAfABQAdgBAQgTQAPgUAAghQAAgjgPgTQgQgTgdAAQgeAAgQAUgADnGLIAAi9QAMgEAMAAIAABBIBAAAQgBAOgCAIIg9AAIAABoQAAAmAigBQAPAAAQgFIgEAVQgOAGgRgBQg3AAABg4gAA2GsQgWgZABgtQAAgvAWgZQAYgZAvAAQAgABAbAJIAACxIgXAAIgBgPQgVATgagBQgnAAgVgXgABKEvQgQATAAAkQAAAiAOAUQAPATAdAAQAaAAASgSIAAh+QgQgDgSAAQgjAAgRATgAm6GqQgWgZgBgtQABgqASgZQAWgbAogBQAmAAAUAZQASAVAAAkQAAANgBAJIiDAAQADAgAQAQQARARAdAAQAigBAZgPIgDAYQgXANghAAQgrAAgYgZgAmoErQgOAQgCAcIBrAAIAAgCQAAgagMgQQgOgQgaAAQgZAAgOAQgAo3GLIAAi9QALgEAOAAIAABBIA/AAQgBANgBAJIg9AAIAABoQgBAmAjgBQAPAAAPgFIgDAVQgPAGgRgBQg2AAAAg4gAPuHAIAAjyQAPgEAKAAIAAD2gALpHAIAAhzQAAgagLgLQgNgMgfAAQgVAAgUAEIAACgIgZAAIAAixQAlgJAdgBQArAAATASQASAQAAAiIAAB3gAFiHAIAAi2IAYAAIAAC2gAgcHAIAAhzQAAgagLgLQgMgMggAAQgTAAgWAEIAACgIgYAAIAAixQAkgJAegBQArAAATASQASAQAAAiIAAB3gAkOHAIAAixQAMgEAQgCQAQgDAPAAQAUAAAKACQAAANgCAIQgLgBgQAAQgQAAgTADIAAChgAp8HAIAAhzQABgagMgLQgNgMgfAAQgUAAgVAEIAACgIgZAAIAAixQAlgJAdgBQAsAAATASQARAQAAAiIAAB3gAtJHAIAAjyQAPgEAJAAIAAD2gAFjDpQgGgFAAgHQAAgHAGgFQAEgEAHAAQAHAAAEAEQAFAFABAHQgBAHgFAFQgEAFgHAAQgHAAgEgFgA2KAeQhRgrAAg+QAAgsArgkQArgkBHgTQgCAjASAfIBWCUQAKARAEATIADgGQAQgcAAgfQAAgggQgcIhFh4QgQgcAAgfQAAghAQgcIAEgGQAEATAJARIBoC0QAKARAEATIAEgGQAQgcAAgfQAAgggQgdIhGh4QgQgbAAghQAAgfAQgcIAEgHQADATAKARIBXCXQAPAZABAdQBGATArAkQAsAkAAAsQAAA+hRArQhRAshzAAQhyAAhRgsgAtLAtQACgbAJgZQAUAJAbAFQAZAFAWABQAlAAATgMQAUgLAAgXQAAgVgQgPQgOgMgngRIgagLQgogSgUgVQgWgaAAgnQAAguAfgYQAggbA+AAQA0AAArAPQgCAcgJAYQgTgIgZgDQgVgEgTAAQgiAAgRANQgQALAAAVQAAATAPAOQANAMAdANIAcAMQAyAVAWAYQAVAZAAAmQAAAtghAbQgjAbhBAAQg/AAgsgTgARHAZQgjgjAAhEQAAg/AdgkQAhgoBAAAQA7AAAfAkQAbAfABA0QgBAVgDAXIi2AAQAFAjAVARQAVAQAmAAQAwAAArgTQgEAcgFAXQgjAQgwAAQhHAAgkglgATehlQgBghgQgRQgQgSgdAAQg8AAgHBEICBAAIAAAAgAMgAaQgegjAAhAQAAhGAkgkQAlgmBHAAQAWAAAUAEIAAhVQAXgIAiAAIAAFqIg0AAIgDghQgMAUgRAJQgSAKgcAAQg0ABgfglgANQiPQgVAYAAAuQABApAQAXQATAZAkAAQAgAAAZgTIAAigQgYgFgVAAQgqAAgVAZgADdAaQgggjAAhAQAAhGAkgkQAlgmBHAAQA5AAApAPIAAECIg0AAIgDgfQgXAlgyAAQg0ABgeglgAEMiPQgVAZAAAtQAAApARAXQASAZAlAAQAfAAAZgSIAAiiQgTgEgXAAQgqAAgXAZgAAZgZIAAkQQAZgJAfAAIAABiIBaAAQgBAbgDAWIhWAAIAAB/QABAuArAAQAYAAAVgIQgDAcgEAUQgUAIgcAAQhaAAAAhXgAoXAaQgggjAAhAQAAhGAkgkQAlgmBIAAQA4AAAqAPIAAECIg1AAIgCgfQgYAlgxAAQg1ABgeglgAnniPQgWAZABAtQAAApAQAXQATAZAlAAQAeAAAZgSIAAiiQgTgEgWAAQgsAAgVAZgAVIA4IAAkCQATgGAcgFQAbgEAYAAQAhABARABIgBAbQgCAPgCAHQgTgCgZAAQgUAAgVAEIAADcgAKaA4IAAijQAAghgNgNQgQgPgpAAQgUAAgZAFIAADbIg5AAIAAkCQAcgGAbgFQAcgEAVAAQBEAAAfAbQAbAYAAAxIAACtgAhZA4IAAijQAAghgNgNQgRgPgpAAQgTAAgaAFIAADbIg5AAIAAkCQAcgGAbgFQAcgEAVAAQBFAAAeAbQAbAYAAAxIAACtg");
	this.shape.setTransform(150,45.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.SantanderInternationalpos, new cjs.Rectangle(0,0,300,90.3), null);


(lib.primary_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAAQABgQAHgJQAJgLAPABQAPgBAIAKQAIAHgBAOIgBAMIgqAAQABAJAFADQAFAEAIgBQALAAALgEIgCAOQgKAEgLABQglAAAAglgAANgFQAAgRgMAAQgMAAgCARIAaAAIAAAAg");
	this.shape.setTransform(110.65,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAkIAAhFIAQAAIABAKQAFgMAKAAIAHABQAAAJgBAHIgIgBQgIAAgEAEIAAAzg");
	this.shape_1.setTransform(104.9,18.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAbQgJgJAAgSQAAgQAJgKQAJgJAPAAQAQAAAJAJQAJAKAAAQQAAARgJAKQgJAKgQAAQgPAAgJgKgAgOAAQAAAWAOAAQAPAAAAgWQAAgVgPAAQgOAAAAAVg");
	this.shape_2.setTransform(98.125,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhAkIAAgqQAAgOgMAAQgHAAgFAFIAAAFIAAAuIgRAAIAAgqQAAgOgLAAQgHAAgGAFIAAAzIgSAAIAAhFIAQAAIACALQAGgNANAAQAPAAAFANQAHgNAOAAQAXAAAAAZIAAAug");
	this.shape_3.setTransform(88.425,18.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAXIAAhCQAIgCAKAAIAAAVIATAAIgCAPIgRAAIAAAeQAAALAIAAQAFAAAFgCIgCAOQgGACgHABQgVAAAAgYg");
	this.shape_4.setTransform(76.975,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAdQgFgGAAgMIAAguIASAAIAAArQAAAOALAAQAGAAAGgGIAAgzIASAAIAABFIgRAAIgBgLQgGANgMAAQgMAAgGgHg");
	this.shape_5.setTransform(70.425,18.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAbQgJgJAAgSQAAgQAJgKQAJgJAPAAQAQAAAJAJQAJAKAAAQQAAARgJAKQgJAKgQAAQgPAAgJgKgAgOAAQAAAWAOAAQAPAAAAgWQAAgVgPAAQgOAAAAAVg");
	this.shape_6.setTransform(62.775,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAqQgJgJABgSQgBgkAkAAIAJAAIAAgaQAJgCAJAAIAABiIgRAAIgBgJQgGAKgLABQgMAAgHgJgAgMAPQAAAWAOgBQAHAAAFgEIAAgnIgKAAQgQAAAAAWg");
	this.shape_7.setTransform(51.65,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAkIAAgqQAAgOgMAAQgFAAgGAFIAAAzIgSAAIAAhFIAQAAIACALQAGgNAMAAQAMAAAFAHQAGAGAAAMIAAAug");
	this.shape_8.setTransform(44.225,18.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAzIAAhFIARAAIAABFgAgGggQgEgDAAgFQAAgEAEgDQADgDADAAQAEAAADADQADADABAEQgBAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_9.setTransform(38.6,16.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAwIAAhgIA3AAQAAAIgBAIIgkAAIAAAZIAiAAQAAAHgCAIIggAAIAAAog");
	this.shape_10.setTransform(33.625,16.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#EC0000").ss(1,1,1).p("AolipIRLAAQBHAAAxAyQAyAyAABFQAABGgyAyQgxAyhHAAIxLAAQhHAAgygyQgxgyAAhGQAAhFAxgyQAygyBHAAg");
	this.shape_11.setTransform(72,17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC0000").s().p("AolCqQhHAAgygyQgxgyAAhGQAAhFAxgyQAygyBHAAIRLAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAg");
	this.shape_12.setTransform(72,17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC0000").s().p("AgUAbQgIgKAAgRQAAgPAHgKQAIgKAOAAQAPAAAHAIQAHAIgBAPIAAAIIgtAAQACAWAUAAQALAAAKgFIgCALQgJAEgKAAQgRAAgJgJgAARgFQAAgUgQAAQgPAAgCAUIAhAAIAAAAg");
	this.shape_13.setTransform(109.5,18.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC0000").s().p("AgSAjIAAhEIAMAAIAAAKQAGgMALAAIAIABIgBALIgJAAQgJgBgGAHIAAA0g");
	this.shape_14.setTransform(104.025,18.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC0000").s().p("AgXAbQgIgKAAgRQAAgQAIgKQAJgJAOAAQAPAAAIAJQAJAKAAAQQAAARgJAKQgIAJgPAAQgOAAgJgJgAgSAAQAAAaASAAQATAAAAgaQAAgZgTAAQgSAAAAAZg");
	this.shape_15.setTransform(97.425,18.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC0000").s().p("AAlAjIAAgqQAAgRgPgBQgJAAgHAIIAAAHIAAAtIgLAAIAAgqQAAgRgPgBQgJAAgHAIIAAA0IgMAAIAAhEIALAAIABALQAHgNAOAAQAPAAAEANQAIgNAPAAQALAAAFAHQAGAGAAAMIAAAtg");
	this.shape_16.setTransform(87.825,18.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC0000").s().p("AgQAYIAAhDQAFgCAHAAIAAAVIAVAAIgBAKIgUAAIAAAlQAAANAKAAQAGAAAFgDIgCAKQgGADgGAAQgTAAAAgWg");
	this.shape_17.setTransform(76.775,17.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC0000").s().p("AgVAdQgGgGABgMIAAguIAMAAIAAArQgBASAPAAQAIAAAHgIIAAg1IANAAIAABFIgMAAIAAgKQgIALgMABQgLgBgGgGg");
	this.shape_18.setTransform(70.3,18.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC0000").s().p("AgXAbQgIgKAAgRQAAgQAIgKQAJgJAOAAQAPAAAIAJQAJAKAAAQQAAARgJAKQgIAJgPAAQgOAAgJgJgAgSAAQAAAaASAAQATAAAAgaQAAgZgTAAQgSAAAAAZg");
	this.shape_19.setTransform(62.875,18.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC0000").s().p("AgVApQgHgJAAgSQAAgjAhgBIAMABIAAgbQAFgBAHAAIAABhIgLAAIgBgJQgGALgLAAQgNAAgIgJgAgQAOQAAAaASAAQAJAAAGgGIAAgsQgFgCgHAAQgVAAAAAag");
	this.shape_20.setTransform(52.225,16.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC0000").s().p("AAPAjIAAgqQAAgRgOgBQgJAAgHAIIAAA0IgMAAIAAhEIALAAIABALQAHgNANAAQALAAAGAHQAGAGAAAMIAAAtg");
	this.shape_21.setTransform(44.975,18.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC0000").s().p("AgFAyIAAhFIALAAIAABFgAgEgjQgCgDAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_22.setTransform(39.5,16.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EC0000").s().p("AgZAwIAAhgIAzAAIgBAMIgmAAIAAAfIAkAAIgBAKIgjAAIAAArg");
	this.shape_23.setTransform(34.825,16.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAbQgIgKAAgRQAAgPAHgKQAIgKAOAAQAPAAAHAIQAHAIgBAPIAAAIIgtAAQACAWAUAAQALAAAKgFIgCALQgJAEgKAAQgRAAgJgJgAARgFQAAgUgQAAQgPAAgCAUIAhAAIAAAAg");
	this.shape_24.setTransform(109.5,18.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAjIAAhEIAMAAIAAAKQAGgMALAAIAIABIgBALIgJAAQgJgBgGAHIAAA0g");
	this.shape_25.setTransform(104.025,18.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXAbQgIgKAAgRQAAgQAIgKQAJgJAOAAQAPAAAIAJQAJAKAAAQQAAARgJAKQgIAJgPAAQgOAAgJgJgAgSAAQAAAaASAAQATAAAAgaQAAgZgTAAQgSAAAAAZg");
	this.shape_26.setTransform(97.425,18.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAlAjIAAgqQAAgRgPgBQgJAAgHAIIAAAHIAAAtIgLAAIAAgqQAAgRgPgBQgJAAgHAIIAAA0IgMAAIAAhEIALAAIABALQAHgNAOAAQAPAAAEANQAIgNAPAAQALAAAFAHQAGAGAAAMIAAAtg");
	this.shape_27.setTransform(87.825,18.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAYIAAhDQAFgCAHAAIAAAVIAVAAIgBAKIgUAAIAAAlQAAANAKAAQAGAAAFgDIgCAKQgGADgGAAQgTAAAAgWg");
	this.shape_28.setTransform(76.775,17.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVAdQgGgGABgMIAAguIAMAAIAAArQgBASAPAAQAIAAAHgIIAAg1IANAAIAABFIgMAAIAAgKQgIALgMABQgLgBgGgGg");
	this.shape_29.setTransform(70.3,18.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXAbQgIgKAAgRQAAgQAIgKQAJgJAOAAQAPAAAIAJQAJAKAAAQQAAARgJAKQgIAJgPAAQgOAAgJgJgAgSAAQAAAaASAAQATAAAAgaQAAgZgTAAQgSAAAAAZg");
	this.shape_30.setTransform(62.875,18.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVApQgHgJAAgSQAAgjAhgBIAMABIAAgbQAFgBAHAAIAABhIgLAAIgBgJQgGALgLAAQgNAAgIgJgAgQAOQAAAaASAAQAJAAAGgGIAAgsQgFgCgHAAQgVAAAAAag");
	this.shape_31.setTransform(52.225,16.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAPAjIAAgqQAAgRgOgBQgJAAgHAIIAAA0IgMAAIAAhEIALAAIABALQAHgNANAAQALAAAGAHQAGAGAAAMIAAAtg");
	this.shape_32.setTransform(44.975,18.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAyIAAhFIALAAIAABFgAgEgjQgCgDAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_33.setTransform(39.5,16.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgZAwIAAhgIAzAAIgBAMIgmAAIAAAfIAkAAIgBAKIgjAAIAAArg");
	this.shape_34.setTransform(34.825,16.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAgIACgKQAIAEALAAQAOAAAAgJQAAgEgDgDQgCgCgGgCIgGgCQgSgFAAgPQAAgJAHgFQAGgFALAAQAMAAAJADIgCAKQgJgDgJAAQgNAAAAAJQAAAHALAEIAGACQASAFAAAOQAAAJgGAGQgIAFgLAAQgOAAgIgEg");
	this.shape_35.setTransform(101.375,18.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMAfIAAhPQAFgBAHAAIAABPQAAAKAHAAQAEAAACgCIgBAKQgEACgFAAQgPAAAAgTg");
	this.shape_36.setTransform(96.725,16.95);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFAyIAAhFIALAAIAABFgAgFgjQgCgDAAgDQAAgEACgCQADgCACAAQAEAAACACQACACAAAEQAAADgCADQgCACgEAAQgCAAgDgCg");
	this.shape_37.setTransform(92.75,16.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAfQgGgGAAgKQAAgLAIgFQAJgHAVgBIADAAIAAgDQAAgHgDgDQgEgDgIAAQgLAAgLAFIABgKQAKgFANAAQAZAAAAAXIAAAvIgLAAIAAgKQgHALgNAAQgKAAgGgFgAgJAEQgFAEAAAHQAAAFADADQADAEAGAAQALAAAGgJIAAgSIgCAAQgQAAgGAEg");
	this.shape_38.setTransform(87.425,18.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgUAbQgJgKAAgRQAAgPAIgKQAIgKAPAAQANAAAIAIQAGAIABAPIgBAIIgtAAQACAWAUAAQAMAAAKgFIgCALQgKAEgLAAQgQAAgJgJgAASgFQAAgUgRAAQgPAAgCAUIAiAAIAAAAg");
	this.shape_39.setTransform(75.8,18.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgMAfIAAhPQAFgBAHAAIAABPQAAAKAHAAQAEAAACgCIgBAKQgEACgFAAQgPAAAAgTg");
	this.shape_40.setTransform(60.275,16.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAfIAAhPQAFgBAHAAIAABPQAAAKAHAAQAEAAACgCQAAAFgBAFQgEACgFAAQgPAAAAgTg");
	this.shape_41.setTransform(56.375,16.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgVAdQgGgGABgMIAAguIALAAIAAArQABASAOAAQAIAAAIgIIAAg1IAMAAIAABFIgLAAIgBgKQgHALgNABQgLgBgGgGg");
	this.shape_42.setTransform(50.25,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_34,p:{x:34.825}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:52.225}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:76.775}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_34,p:{x:43.475}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_31,p:{x:68.375}},{t:this.shape_39},{t:this.shape_28,p:{x:82.025}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,146,36);


(lib.mc_level3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgHAHQgDgDAAgEQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAEgDADQgDAEgFAAQgDAAgEgEg");
	this.shape.setTransform(497.725,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgbA2QgKgNAAgWQAAgvArAAIAQABIAAgiQAHgCAJAAIAAB+IgPAAIgBgNQgIAOgPABQgQAAgKgLgAgVASQAAAiAYAAQALAAAIgJIAAg4QgHgCgJAAQgbAAAAAhg");
	this.shape_1.setTransform(490.375,15.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgaAiQgLgMAAgWQAAgUAKgMQAKgOATAAQASAAAJAMQAJAKAAASIAAAMIg7AAQADAcAaAAQAPAAAMgHIgCAOQgNAGgNAAQgWAAgLgNgAAWgGQABgbgWAAQgTAAgDAbIArAAIAAAAg");
	this.shape_2.setTransform(481.25,16.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgVAfIAAhWQAHgDAJAAIAAAaIAbAAIgCAOIgZAAIAAAvQAAARANAAQAHAAAGgDIgBANQgIADgIAAQgZAAAAgcg");
	this.shape_3.setTransform(474.075,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgVAfIAAhWQAHgDAJAAIAAAaIAbAAIgCAOIgZAAIAAAvQAAARANAAQAHAAAGgDIgBANQgIADgIAAQgZAAAAgcg");
	this.shape_4.setTransform(467.975,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgHBAIAAhZIAPAAIAABZgAgGguQgDgCAAgFQAAgEADgEQADgCADAAQAEAAADACQADAEAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_5.setTransform(462.425,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAwAuIAAg3QAAgXgUAAQgLAAgKAKIABAIIAAA8IgPAAIAAg3QAAgXgTAAQgMAAgJAKIAABEIgPAAIAAhZIAOAAIABAOQAJgQASAAQAUAAAGAQQAKgQASAAQAOAAAIAJQAHAIAAAOIAAA8g");
	this.shape_6.setTransform(452.725,16.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgXAuIAAhZIAOAAIABANQAIgOAOAAIAKABIgBANIgLgBQgMAAgIAJIAABEg");
	this.shape_7.setTransform(442.5,16.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgaAiQgLgMAAgWQAAgUAJgMQALgOATAAQASAAAKAMQAIAKAAASIAAAMIg7AAQADAcAZAAQAPAAANgHIgCAOQgNAGgNAAQgVAAgMgNgAAXgGQAAgbgWAAQgTAAgDAbIAsAAIAAAAg");
	this.shape_8.setTransform(434.15,16.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AglBBIAAh/IAPAAIABAMQAIgOAPAAQARAAAIAMQALAMAAAWQgBAvgqAAIgQgBIAAAlgAgVgqIAAA4QAHACAJAAQAbAAAAghQAAgigYAAQgLAAgIAJg");
	this.shape_9.setTransform(425.15,18.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgaAiQgLgMAAgWQAAgUAKgMQAKgOATAAQASAAAJAMQAJAKAAASIAAAMIg7AAQADAcAaAAQAOAAANgHIgCAOQgNAGgNAAQgWAAgLgNgAAWgGQAAgbgVAAQgTAAgDAbIArAAIAAAAg");
	this.shape_10.setTransform(411.6,16.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgXAuIAAhZIAOAAIACANQAHgOAOAAIAKABIgBANIgLgBQgMAAgHAJIAABEg");
	this.shape_11.setTransform(404.55,16.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgbAmQgIgIAAgPIAAg8IAQAAIAAA3QAAAXATAAQALAAAJgKIAAhEIAQAAIAABZIgPAAIgBgOQgJAQgRAAQgOAAgHgIg");
	this.shape_12.setTransform(395.925,17.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgeApQAAgHACgGQALAGAOAAQASAAAAgMQAAgGgDgDQgDgDgIgDIgHgCQgYgGAAgUQAAgLAIgHQAJgHAPAAQAOAAAMAEIgCANQgMgEgLAAQgSAAAAAMQAAAKAPAEIAIADQAXAGAAASQAAAMgJAHQgJAIgPAAQgRAAgLgGg");
	this.shape_13.setTransform(387.225,16.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgdAiQgLgMAAgWQAAgVALgMQAKgNATAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgSAAgLgNgAgYAAQAAAiAYAAQAZAAAAgiQAAghgZAAQgYAAAAAhg");
	this.shape_14.setTransform(378.475,16.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgQAoIAAhlQAGgCAJAAIAABmQAAANAKAAQAFAAADgCQAAAGgCAHQgFABgGABQgUAAAAgZg");
	this.shape_15.setTransform(371.675,15.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgTAjQgMgMABgXQgBgWAMgMQALgMAUAAQALAAAJAEIgCANQgIgEgJAAQgNAAgHAJQgIAJABAPQgBAQAIAJQAHAJANAAQAKAAAJgFIgCAOQgIAEgLAAQgSAAgMgMg");
	this.shape_16.setTransform(364.85,16.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgVAfIAAhWQAHgDAJAAIAAAaIAbAAIgCAOIgZAAIAAAvQAAARANAAQAHAAAGgDIgBANQgIADgIAAQgZAAAAgcg");
	this.shape_17.setTransform(354.475,15.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AAUAuIAAg3QAAgXgTAAQgLAAgJAKIAABEIgQAAIAAhZIAPAAIABAOQAJgQARAAQAOAAAHAJQAIAIAAAOIAAA8g");
	this.shape_18.setTransform(346.275,16.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgbAmQgIgIAAgPIAAg8IAQAAIAAA3QAAAXATAAQALAAAJgKIAAhEIAQAAIAABZIgPAAIgBgOQgJAQgRAAQgOAAgHgIg");
	this.shape_19.setTransform(336.475,17.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgdAiQgLgMAAgWQAAgVALgMQAKgNATAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgSAAgLgNgAgYAAQAAAiAYAAQAZAAAAgiQAAghgZAAQgYAAAAAhg");
	this.shape_20.setTransform(326.875,16.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgTAjQgLgMgBgXQABgWALgMQALgMAUAAQALAAAIAEQABAGgCAHQgIgEgJAAQgNAAgHAJQgHAJAAAPQAAAQAHAJQAHAJANAAQAKAAAIgFIgBAOQgIAEgLAAQgSAAgMgMg");
	this.shape_21.setTransform(318.25,16.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgSAjQgMgMAAgXQAAgWAMgMQALgMASAAQAMAAAJAEIgCANQgIgEgKAAQgMAAgHAJQgIAJAAAPQAAAQAIAJQAHAJAMAAQALAAAJgFIgDAOQgHAEgLAAQgTAAgKgMg");
	this.shape_22.setTransform(310.55,16.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgaAoQgIgHAAgNQAAgPALgHQAMgIAbgCIAEAAIAAgDQAAgKgFgEQgEgEgLAAQgPAAgOAHIABgNQANgHARAAQAhAAAAAeIAAA9IgOAAIgBgNQgIAPgSAAQgMAAgIgHgAAQAAQgUAAgIAFQgHAFAAAJQAAAHAEAEQAFAEAHAAQAOAAAJgLIAAgYg");
	this.shape_23.setTransform(301.975,16.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgXAuIAAhZIAOAAIABANQAIgOAOAAIAKABIgBANIgLgBQgMAAgIAJIAABEg");
	this.shape_24.setTransform(291.3,16.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgdAiQgLgMAAgWQAAgVALgMQAKgNATAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgSAAgLgNgAgYAAQAAAiAYAAQAZAAAAgiQAAghgZAAQgYAAAAAhg");
	this.shape_25.setTransform(282.775,16.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgeApQAAgHACgGQALAGAOAAQASAAAAgMQAAgGgDgDQgDgDgIgDIgHgCQgYgGAAgUQAAgLAIgHQAJgHAPAAQAOAAAMAEIgCANQgMgEgLAAQgSAAAAAMQAAAKAPAEIAIADQAXAGAAASQAAAMgJAHQgJAIgPAAQgRAAgLgGg");
	this.shape_26.setTransform(270.275,16.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgQAoIAAhlQAGgCAJAAIAABmQAAANAKAAQAFAAADgCQAAAGgCAHQgFABgGABQgUAAAAgZg");
	this.shape_27.setTransform(264.275,15.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgaAoQgIgHAAgNQAAgPALgHQAMgIAbgCIAEAAIAAgDQAAgKgFgEQgEgEgLAAQgPAAgOAHIABgNQANgHARAAQAhAAAAAeIAAA9IgOAAIgBgNQgIAPgSAAQgMAAgIgHgAAQAAQgUAAgIAFQgHAFAAAJQAAAHAEAEQAFAEAHAAQAOAAAJgLIAAgYg");
	this.shape_28.setTransform(256.575,16.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AAWAtIgWhDIgWBDIgNAAIgghZIARAAIAWBHIAWhHIANAAIAYBJIAVhJIAPAAIgdBZg");
	this.shape_29.setTransform(245.35,16.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgaAoQgIgHAAgNQAAgPALgHQAMgIAbgCIAEAAIAAgDQAAgKgFgEQgEgEgLAAQgPAAgOAHIABgNQANgHARAAQAhAAAAAeIAAA9IgOAAIgBgNQgIAPgSAAQgMAAgIgHgAAQAAQgUAAgIAFQgHAFAAAJQAAAHAEAEQAFAEAHAAQAOAAAJgLIAAgYg");
	this.shape_30.setTransform(233.625,16.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgXAuIAAhZIAOAAIACANQAHgOAOAAIAKABIgBANIgLgBQgMAAgHAJIAABEg");
	this.shape_31.setTransform(226.8,16.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgbA2QgKgNAAgWQAAgvArAAIAQABIAAgiQAHgCAJAAIAAB+IgPAAIgBgNQgIAOgPABQgQAAgKgLgAgVASQAAAiAYAAQALAAAIgJIAAg4QgHgCgJAAQgbAAAAAhg");
	this.shape_32.setTransform(217.975,15.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AAUBAIAAg4QAAgWgTAAQgLAAgJAKIAABEIgQAAIAAh8QAHgCAJAAIAAAyQAJgPARAAQAOAAAHAJQAIAHAAAOIAAA9g");
	this.shape_33.setTransform(208.675,15.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgVAfIAAhWQAHgDAJAAIAAAaIAbAAIgCAOIgZAAIAAAvQAAARANAAQAHAAAGgDIgBANQgIADgIAAQgZAAAAgcg");
	this.shape_34.setTransform(201.075,15.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgHBAIAAhZIAPAAIAABZgAgGguQgDgCAAgFQAAgEADgEQADgCADAAQAEAAADACQADAEAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_35.setTransform(195.525,15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AAXAtIgXhDIgVBDIgPAAIgehZIAPAAIAXBHIAWhHIANAAIAYBJIAVhJIAQAAIgfBZg");
	this.shape_36.setTransform(186.45,16.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgJAWQADgSABgXQAGgCAJgBQgCAdgIAPg");
	this.shape_37.setTransform(173.2,21.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AgeApQAAgHACgGQALAGAOAAQASAAAAgMQAAgGgDgDQgDgDgIgDIgHgCQgYgGAAgUQAAgLAIgHQAJgHAPAAQAOAAAMAEIgCANQgMgEgLAAQgSAAAAAMQAAAKAPAEIAIADQAXAGAAASQAAAMgJAHQgJAIgPAAQgRAAgLgGg");
	this.shape_38.setTransform(167.175,16.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AgVAfIAAhWQAHgDAJAAIAAAaIAbAAIgCAOIgZAAIAAAvQAAARANAAQAHAAAGgDIgBANQgIADgIAAQgZAAAAgcg");
	this.shape_39.setTransform(160.525,15.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AgHBAIAAhZIAPAAIAABZgAgGguQgDgCAAgFQAAgEADgEQADgCADAAQAEAAADACQADAEAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_40.setTransform(154.975,15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AgeApQAAgHACgGQALAGAOAAQASAAAAgMQAAgGgDgDQgDgDgIgDIgHgCQgYgGAAgUQAAgLAIgHQAJgHAPAAQAOAAAMAEIgCANQgMgEgLAAQgSAAAAAMQAAAKAPAEIAIADQAXAGAAASQAAAMgJAHQgJAIgPAAQgRAAgLgGg");
	this.shape_41.setTransform(148.975,16.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AgdAiQgLgMAAgWQAAgVALgMQAKgNATAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgSAAgLgNgAgYAAQAAAiAYAAQAZAAAAgiQAAghgZAAQgYAAAAAhg");
	this.shape_42.setTransform(140.225,16.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AglBBIAAh/IAPAAIABAMQAHgOAQAAQAQAAAKAMQAJAMABAWQAAAvgrAAIgQgBIAAAlgAgVgqIAAA4QAHACAJAAQAbAAAAghQAAgigYAAQgLAAgIAJg");
	this.shape_43.setTransform(130.95,18.725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgaAiQgLgMAAgWQAAgUAKgMQAKgOATAAQASAAAJAMQAJAKAAASIAAAMIg7AAQADAcAaAAQAPAAAMgHIgCAOQgNAGgNAAQgWAAgLgNgAAWgGQABgbgWAAQgTAAgDAbIArAAIAAAAg");
	this.shape_44.setTransform(121.25,16.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AgbA2QgKgNAAgWQAAgvArAAIAQABIAAgiQAHgCAJAAIAAB+IgPAAIgBgNQgIAOgPABQgQAAgKgLgAgVASQAAAiAYAAQALAAAIgJIAAg4QgHgCgJAAQgbAAAAAhg");
	this.shape_45.setTransform(111.675,15.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AgQAoIAAhlQAGgCAJAAIAABmQAAANAKAAQAFAAADgCQAAAGgCAHQgFABgGABQgUAAAAgZg");
	this.shape_46.setTransform(101.275,15.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AgaAoQgIgHAAgNQAAgPALgHQAMgIAbgCIAEAAIAAgDQAAgKgFgEQgEgEgLAAQgPAAgOAHIABgNQANgHARAAQAhAAAAAeIAAA9IgOAAIgBgNQgIAPgSAAQgMAAgIgHgAAQAAQgUAAgIAFQgHAFAAAJQAAAHAEAEQAFAEAHAAQAOAAAJgLIAAgYg");
	this.shape_47.setTransform(93.575,16.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AAUAuIAAg3QAAgXgTAAQgLAAgJAKIAABEIgQAAIAAhZIAPAAIABAOQAJgQARAAQAOAAAHAJQAIAIAAAOIAAA8g");
	this.shape_48.setTransform(84.525,16.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AgdAiQgLgMAAgWQAAgVALgMQAKgNATAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgSAAgLgNgAgYAAQAAAiAYAAQAZAAAAgiQAAghgZAAQgYAAAAAhg");
	this.shape_49.setTransform(74.825,16.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgHBAIAAhZIAPAAIAABZgAgGguQgDgCAAgFQAAgEADgEQADgCADAAQAEAAADACQADAEAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_50.setTransform(67.925,15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AgVAfIAAhWQAHgDAJAAIAAAaIAbAAIgCAOIgZAAIAAAvQAAARANAAQAHAAAGgDIgBANQgIADgIAAQgZAAAAgcg");
	this.shape_51.setTransform(63.125,15.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AgHBAIAAhZIAPAAIAABZgAgGguQgDgCAAgFQAAgEADgEQADgCADAAQAEAAADACQADAEAAAEQAAAFgDACQgDADgEAAQgDAAgDgDg");
	this.shape_52.setTransform(57.575,15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AgbA2QgKgNAAgWQAAgvArAAIAQABIAAgiQAHgCAJAAIAAB+IgPAAIgBgNQgIAOgPABQgQAAgKgLgAgVASQAAAiAYAAQALAAAIgJIAAg4QgHgCgJAAQgbAAAAAhg");
	this.shape_53.setTransform(50.375,15.15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AgbA2QgKgNAAgWQAAgvArAAIAQABIAAgiQAHgCAJAAIAAB+IgPAAIgBgNQgIAOgPABQgQAAgKgLgAgVASQAAAiAYAAQALAAAIgJIAAg4QgHgCgJAAQgbAAAAAhg");
	this.shape_54.setTransform(40.775,15.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AgaAoQgIgHAAgNQAAgPALgHQAMgIAbgCIAEAAIAAgDQAAgKgFgEQgEgEgLAAQgPAAgOAHIABgNQANgHARAAQAhAAAAAeIAAA9IgOAAIgBgNQgIAPgSAAQgMAAgIgHgAAQAAQgUAAgIAFQgHAFAAAJQAAAHAEAEQAFAEAHAAQAOAAAJgLIAAgYg");
	this.shape_55.setTransform(31.525,16.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AgdAiQgLgMAAgWQAAgVALgMQAKgNATAAQATAAALANQALAMAAAVQAAAWgLAMQgLANgTAAQgSAAgLgNgAgYAAQAAAiAYAAQAZAAAAgiQAAghgZAAQgYAAAAAhg");
	this.shape_56.setTransform(18.625,16.925);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#666666").s().p("AAfA/IgvhNQgIgMgFgMIAAAuIAAA3IgOAAIAAh6QAHgDAHAAIAuBKIANAXIgBgzIAAgrQAIgDAHAAIAAB9g");
	this.shape_57.setTransform(7.875,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_level3, new cjs.Rectangle(-0.1,-1,502.3,30), null);


(lib.mc_level2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgGAAQgFAAgEgFg");
	this.shape.setTransform(478.775,27.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcApIAAh0QAJgDAMAAIAAAkIAkAAIgCASIgiAAIAABAQAAAVASAAQAJAAAIgEIgCASQgKAEgKAAQgiAAAAgmg");
	this.shape_1.setTransform(472.175,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAvQgQgQAAgfQAAgeAQgQQAPgQAaABQAPAAALAEQAAAJgCAIQgLgEgMAAQgRAAgKAMQgKAMAAAVQAAAUAKANQAKALAQABQAOgBAMgGIgDASQgKAFgPABQgZAAgOgQg");
	this.shape_2.setTransform(462.45,23.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjA1QgLgJAAgRQAAgVAOgJQARgLAkgCIAGAAIAAgFQAAgNgHgFQgFgGgOABQgVAAgTAJQABgJABgJQARgIAXAAQAsAAAAAnIAABRIgTAAIgBgQQgLAUgXAAQgSAAgKgKgAAWgBQgcABgKAHQgJAGAAAMQgBAJAGAGQAGAGAKAAQATAAAMgPIAAggg");
	this.shape_3.setTransform(451,23.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfA9IAAh2IATAAIABARQALgUASAAIAOACQAAAKgCAIQgHgBgHAAQgRAAgKALIAABbg");
	this.shape_4.setTransform(441.925,23.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcApIAAh0QAJgDAMAAIAAAkIAkAAIgCASIgiAAIAABAQAAAVASAAQAJAAAIgEIgCASQgKAEgKAAQgiAAAAgmg");
	this.shape_5.setTransform(433.325,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAaA9IAAhJQABgfgaAAQgOAAgNAOIAABaIgUAAIAAh2IASAAIACASQAMgVAXAAQATAAAKAMQAKAKAAATIAABQg");
	this.shape_6.setTransform(422.35,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnAuQgOgRAAgdQAAgcAOgQQAOgRAZAAQAaAAAOARQAOAQAAAcQAAAdgOARQgOAQgaABQgZgBgOgQgAggAAQAAAuAgAAQAhAAAAguQAAgsghAAQggAAAAAsg");
	this.shape_7.setTransform(409.475,23.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkA/QgUgYAAgnQABgnATgXQAUgYAjAAQAXAAAOAJQAAAKgDAIQgNgIgUAAQgZABgPAQQgOASABAgQAAAgAOASQAPARAYAAQAVAAAPgHIgDAVQgRAGgRgBQgkAAgTgXg");
	this.shape_8.setTransform(396.65,20.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcApIAAh0QAJgDAMAAIAAAkIAkAAIgCASIgiAAIAABAQAAAVASAAQAJAAAIgEIgCASQgKAEgKAAQgiAAAAgmg");
	this.shape_9.setTransform(381.125,21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJBVIAAh2IATAAIAAB2gAgIg9QgEgEAAgFQAAgHAEgDQADgEAFgBQAGABAEAEQADADAAAHQAAAFgDAEQgEADgGAAQgFAAgDgDg");
	this.shape_10.setTransform(373.725,20.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgoA2QgBgJADgIQAPAJATAAQAZAAAAgRQAAgIgFgDQgFgFgKgDIgKgDQgggJABgaQAAgPALgJQALgKAUABQAUAAAPAFQgBAKgCAHQgPgGgPABQgYgBAAARQAAAMAUAHIALADQAeAJAAAYQABAQgMAKQgMAJgVABQgXAAgOgJg");
	this.shape_11.setTransform(365.75,23.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnAuQgOgRAAgdQAAgcAOgQQAOgRAZAAQAaAAAOARQAOAQAAAcQAAAdgOARQgOAQgaABQgZgBgOgQgAggAAQAAAuAgAAQAhAAAAguQAAgsghAAQggAAAAAsg");
	this.shape_12.setTransform(354.125,23.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgxBWIAAipIATAAIACAQQAKgSAUAAQAXgBAMAQQANAQAAAeQAAA/g5AAQgLgBgKgBIAAAxgAgcg5IAABMQAJADAMAAQAkgBAAgsQAAgugfABQgPgBgLAMg");
	this.shape_13.setTransform(341.7,25.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjAuQgPgQAAgeQAAgbANgQQAOgSAZAAQAYgBANAQQAMAOAAAYQAAAKgCAGIhNAAQADAlAjABQAUAAARgLQgBAMgDAHQgQAJgSAAQgdgBgPgQgAAegIQAAglgdABQgagBgDAlIA6AAIAAAAg");
	this.shape_14.setTransform(328.775,23.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag9BVIAAilQASgEAZAAQApAAAVAZQASAWAAAlQAAAogUAWQgUAXgnAAgAgohAIAACCIAYAAQA4AAAAhCQAAhBg6AAg");
	this.shape_15.setTransform(315.425,20.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkBHQgNgRAAgeQAAg+A5AAQAMAAAKACIAAguQAIgDAMAAIAACoIgTAAIgBgQQgLATgVAAQgVAAgNgPgAgdAYQAAAtAhAAQAOAAAMgMIAAhLQgKgDgMAAQgkAAgBAtg");
	this.shape_16.setTransform(295.2,20.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgjAuQgPgQAAgeQAAgbANgQQAOgSAZAAQAYgBANAQQAMAOAAAYQAAAKgCAGIhNAAQADAlAjABQAUAAARgLQgBAMgDAHQgQAJgSAAQgdgBgPgQgAAegIQAAglgdABQgagBgDAlIA6AAIAAAAg");
	this.shape_17.setTransform(283.025,23.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdA7IgdgqIgeAqIgWAAIApg6Igog8IAXAAIAcAsIAegsIAWAAIgpA7IArA7g");
	this.shape_18.setTransform(271.45,23.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJBVIAAh2IATAAIAAB2gAgIg9QgEgEAAgFQAAgHAEgDQADgEAFgBQAGABAEAEQADADAAAHQAAAFgDAEQgEADgGAAQgFAAgDgDg");
	this.shape_19.setTransform(263.075,20.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgsBTIAAilIBaAAQgBAJgCAKIhDAAIAAA2IBAAAIgCASIg+AAIAABKg");
	this.shape_20.setTransform(255,20.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAbBUIAAhKQAAgegaABQgPAAgMANIAABaIgVAAIAAilQAJgCAMAAIAABDQAMgUAXAAQATAAAKALQAKAKAAASIAABRg");
	this.shape_21.setTransform(236.8,20.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcApIAAh0QAJgDAMAAIAAAkIAkAAIgCASIgiAAIAABAQAAAVASAAQAJAAAIgEIgCASQgKAEgKAAQgiAAAAgmg");
	this.shape_22.setTransform(226.675,21.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAaA9IAAhJQABgfgaAAQgOAAgNAOIAABaIgUAAIAAh2IASAAIACASQAMgVAXAAQATAAAKAMQAKAKgBATIAABQg");
	this.shape_23.setTransform(215.7,23.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgnAuQgOgRAAgdQAAgcAOgQQAOgRAZAAQAaAAAOARQAOAQAAAcQAAAdgOARQgOAQgaABQgZgBgOgQgAggAAQAAAuAgAAQAhAAAAguQAAgsghAAQggAAAAAsg");
	this.shape_24.setTransform(202.825,23.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABAA9IAAhJQAAgfgaAAQgPAAgNANIABALIAABQIgUAAIAAhJQAAgfgaAAQgPAAgNAOIAABaIgUAAIAAh2IATAAIABASQAMgVAYAAQAbAAAHAWQAOgWAZAAQATAAAKAMQAJAKAAATIAABQg");
	this.shape_25.setTransform(186.325,23.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgxBVIAAgIQAAgVAPgSQAKgMAXgSQAbgUAAgXQAAgegkAAQgTAAgRAIQAAgLACgIQAPgIAWAAQAaAAAPAOQANAMAAAWQAAASgKAPQgJANgSAOQgRANgHAHQgKALgCALIBLAAQAAAJgCAKg");
	this.shape_26.setTransform(164.1,20.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AANBVIAAiUQgXAEgXAJQAAgIACgMQAdgNAkgBIAACpg");
	this.shape_27.setTransform(150.125,20.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfA9IAAh2IATAAIABARQALgUASAAIAOACQAAAKgCAIQgHgBgHAAQgRAAgKALIAABbg");
	this.shape_28.setTransform(136.025,23.125);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AglAyQgKgLABgTIAAhQIAUAAIAABKQAAAeAaAAQAPAAAMgNIAAhbIAUAAIAAB2IgTAAIgBgSQgNAVgWAAQgTAAgKgLg");
	this.shape_29.setTransform(124.5,23.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgnAuQgOgRAAgdQAAgcAOgQQAOgRAZAAQAaAAAOARQAOAQAAAcQAAAdgOARQgOAQgaABQgZgBgOgQgAggAAQAAAuAgAAQAhAAAAguQAAgsghAAQggAAAAAsg");
	this.shape_30.setTransform(111.725,23.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAbBUIAAhKQAAgegaABQgPAAgMANIAABaIgVAAIAAilQAJgCAMAAIAABDQAMgUAXAAQATAAAKALQAJAKAAASIAABRg");
	this.shape_31.setTransform(93.8,20.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgcApIAAh0QAJgDAMAAIAAAkIAkAAIgCASIgiAAIAABAQAAAVASAAQAJAAAIgEIgCASQgKAEgKAAQgiAAAAgmg");
	this.shape_32.setTransform(83.675,21.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgJBVIAAh2IATAAIAAB2gAgIg9QgEgEAAgFQAAgHAEgDQADgEAFgBQAGABAEAEQADADAAAHQAAAFgDAEQgEADgGAAQgFAAgDgDg");
	this.shape_33.setTransform(76.275,20.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAeA7IgehZIgdBZIgTAAIgph2IAWAAIAdBgIAehgIASAAIAfBhIAdhhIAUAAIgoB2g");
	this.shape_34.setTransform(64.175,23.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgjAuQgPgQAAgeQAAgbANgQQAOgSAZAAQAYgBANAQQAMAOAAAYQAAAKgCAGIhNAAQADAlAjABQAUAAARgLQgBAMgDAHQgQAJgSAAQgdgBgPgQgAAegIQAAglgdABQgagBgDAlIA6AAIAAAAg");
	this.shape_35.setTransform(43.575,23.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgJA7Igsh2IAWAAIAfBiIAhhiIAVAAIgsB2g");
	this.shape_36.setTransform(31.925,23.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgjA1QgLgJAAgRQAAgVAOgJQAQgLAlgCIAGAAIAAgFQAAgNgHgFQgFgGgOABQgVAAgTAJQAAgJACgJQARgIAXAAQAsAAAAAnIAABRIgTAAIgBgQQgLAUgXAAQgRAAgLgKgAAWgBQgbABgLAHQgKAGABAMQgBAJAGAGQAGAGAKAAQATAAAMgPIAAggg");
	this.shape_37.setTransform(20,23.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgzBMQAAgKADgIQATAKAXAAQAQABAKgIQAKgHAAgNQAAgMgIgIQgGgFgQgHIgNgFQglgOAAggQAAgVANgLQAPgMAaAAQAXABASAHQgBAJgCAJQgSgIgUAAQghABAAAZQAAAMAHAHQAGAGAPAFIANAFQAoAOAAAhQAAAVgPANQgQAMgcAAQgaAAgSgKg");
	this.shape_38.setTransform(8.225,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_level2, new cjs.Rectangle(0,0,484,38.6), null);


(lib.mc_level1_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_299 = function() {
		if (!this.looped) this.looped = 1;
		if (this.looped++ == 1) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// s
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC0000").s().p("AhsCQQABgXAHgXQAnAWAvABQBDAAAAgrQAAgUgNgMQgKgJgcgLIgZgKQgpgPgSgTQgYgXAAglQAAgpAdgYQAegWA2AAQAzgBAoAOQgCAbgFATQgpgOgnAAQg/AAAAApQAAAgA1AUIAaAKQAqARATASQAVAVAAAiQAAAqgfAZQggAag6ABQg4AAgogXg");
	this.shape.setTransform(847.175,56.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27).to({_off:false},0).wait(273));

	// g
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC0000").s().p("AhqDWQABgXAEgZQAqAVArAAQBdAAAAhgIAAgpQgbAxg3AAQg7AAghgpQgigrAAhPQAAipCZAAQA8AAAyARIAAEuQAACUiTAAQgyAAgpgUgAhLhCQAAB3BUAAQAoAAAcgfIAAjLQgZgHgeAAQhhAAAAB6g");
	this.shape_1.setTransform(816.7,63.725);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(26).to({_off:false},0).wait(274));

	// n
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC0000").s().p("ABGCjIAAjNQAAgngRgRQgSgTgpAAQgdAAgiAJIAAEPIg3AAIAAkxQBBgUA2ABQCCgBAABxIAADUg");
	this.shape_2.setTransform(785.075,56.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(25).to({_off:false},0).wait(275));

	// i
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC0000").s().p("AgaDkIAAk9IA2AAIAAE9gAgYilQgLgKABgQQgBgQALgKQAKgKAOAAQAPAAAKAKQALAKAAAQQAAAQgLAKQgKAKgPAAQgOAAgKgKg");
	this.shape_3.setTransform(761.6,50.025);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(24).to({_off:false},0).wait(276));

	// v
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC0000").s().p("AgbCfIhxk9IA6AAIBTEAIBVkAIA3AAIhzE9g");
	this.shape_4.setTransform(740.75,56.925);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(23).to({_off:false},0).wait(277));

	// a
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC0000").s().p("AhfB+QgigqAAhTQAAinCXABQA7gBAxASIAAEzIgzAAIgDgrQgcAzg2AAQg6gBgfgogAhJAAQAAB5BQAAQAoAAAcgfIAAjLQgagHgcAAQheAAAAB4g");
	this.shape_5.setTransform(709.575,56.95);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(22).to({_off:false},0).wait(278));

	// s
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC0000").s().p("AhsCQQABgXAHgXQAnAWAvABQBDAAAAgrQAAgUgNgMQgKgJgcgLIgZgKQgpgPgSgTQgYgXAAglQAAgpAdgYQAegWA2AAQAzgBAoAOQgCAbgFATQgpgOgnAAQg/AAAAApQAAAgA1AUIAaAKQAqARATASQAVAVAAAiQAAAqgfAZQggAag6ABQg4AAgogXg");
	this.shape_6.setTransform(681.325,56.95);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(21).to({_off:false},0).wait(279));

	// r
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC0000").s().p("AhUCiIAAkyQAxgRA3AAQAlAAAcAGQgBAegFARQgWgGgkAAQgXAAgbAGIAAEOg");
	this.shape_7.setTransform(646.3,56.625);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(20).to({_off:false},0).wait(280));

	// u
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC0000").s().p("Ah8AyIAAjUIA3AAIAADNQAAAnARARQASATApAAQAdAAAhgJIAAkPIA4AAIAAExQhBAUg2AAQiCAAAAhxg");
	this.shape_8.setTransform(617.225,57.325);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(19).to({_off:false},0).wait(281));

	// o
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC0000").s().p("AhpB6QglgsAAhOQAAhOAlgrQAlgsBEAAQBFAAAlAsQAlArAABOQAABOglAsQgmAshEABQhDgBgmgsgAhVAAQAAB5BVAAQBXAAAAh5QAAh4hXAAQhVAAAAB4g");
	this.shape_9.setTransform(584.675,56.95);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(18).to({_off:false},0).wait(282));

	// y
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC0000").s().p("Ah2DjQAAgdADgRIAUACQAcAAARgRQATgRANgtIiAlOIA6AAIBeELIBVkLIA4AAIh9FmQgiBnhOgBQgPAAgNgDg");
	this.shape_10.setTransform(553.875,64.1);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(17).to({_off:false},0).wait(283));

	// w
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC0000").s().p("ABNCfIhMjwIhNDwIgyAAIhsk9IA5AAIBOEAIBMkAIAzAAIBQECIBJkCIA2AAIhpE9g");
	this.shape_11.setTransform(497.9,57.525);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(16).to({_off:false},0).wait(284));

	// o
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC0000").s().p("AhpB5QglgrAAhOQAAhNAlgsQAlgsBEgBQBFABAlAsQAlAsAABNQAABOglArQgmAuhEgBQhDABgmgugAhVAAQAAB4BVAAQBXAAAAh4QAAh4hXAAQhVAAAAB4g");
	this.shape_12.setTransform(458.175,57.55);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(15).to({_off:false},0).wait(285));

	// r
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC0000").s().p("AhTCiIAAkyQAwgRA3AAQAmAAAaAGQABAegGARQgWgGglAAQgWAAgaAGIAAEOg");
	this.shape_13.setTransform(432.5,57.225);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(14).to({_off:false},0).wait(286));

	// g
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC0000").s().p("AhqDWQABgXAEgZQAqAVArAAQBdAAAAhgIAAgpQgbAxg3AAQg7AAgggpQgjgrAAhPQAAipCZAAQA8AAAyARIAAEuQAACUiTAAQgyAAgpgUgAhLhCQAAB3BUAAQAoAAAcgfIAAjLQgZgHgeAAQhhAAAAB6g");
	this.shape_14.setTransform(402.6,64.325);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(13).to({_off:false},0).wait(287));

	// o
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC0000").s().p("AhpB5QglgrAAhOQAAhNAlgsQAlgsBEgBQBFABAlAsQAlAsAABNQAABOglArQgmAuhEgBQhDABgmgugAhVAAQAAB4BVAAQBXAAAAh4QAAh4hXAAQhVAAAAB4g");
	this.shape_15.setTransform(358.425,57.55);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(12).to({_off:false},0).wait(288));

	// t
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC0000").s().p("AhLBwIAAk5QAXgJAgABIAABfIBgAAIgFAuIhbAAIAACvQAAA4AwAAQAZABAWgMIgHAvQgVAMgfgBQhbAAAAhig");
	this.shape_16.setTransform(332.65,53.15);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(11).to({_off:false},0).wait(289));

	// d
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC0000").s().p("AhgC8QgjgqAAhQQAAipCZABQAeAAAZADIAAh5QAYgJAfABIAAHCIgzAAIgEgsQgaA0g4AAQg7gBgggpgAhLBAQAAB4BUAAQAoAAAcgfIAAjLQgZgHgeAAQhhAAAAB5g");
	this.shape_17.setTransform(292.35,52.45);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(9).to({_off:false},0).wait(291));

	// e
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EC0000").s().p("AheB6QgngsAAhQQAAhIAhgsQAmgwBDABQBBAAAhAnQAfAlAABCIgDAoIjOAAQAHBnBgABQAzAAAsgaQgDAegGATQgkAXg5AAQhLgBgogsgABNgbQgBhdhIAAQhHAAgIBdICYAAIAAAAg");
	this.shape_18.setTransform(260.9,58.75);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(8).to({_off:false},0).wait(292));

	// e
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC0000").s().p("AheB6QgngsAAhQQAAhIAhgsQAmgwBDABQBBAAAhAnQAfAlAABCIgDAoIjPAAQAIBnBgABQAzAAAsgaQgDAegGATQgjAXg6AAQhLgBgogsgABNgbQgBhdhIAAQhHAAgIBdICYAAIAAAAg");
	this.shape_19.setTransform(229.5,58.75);
	this.shape_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(7).to({_off:false},0).wait(293));

	// t
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC0000").s().p("AhLBwIAAk5QAXgIAggBIAABgIBgAAIgFAvIhbAAIAACtQAAA5AwABQAZAAAWgNIgHAwQgWAMgeAAQhbAAAAhjg");
	this.shape_20.setTransform(204.65,54.35);
	this.shape_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(6).to({_off:false},0).wait(294));

	// n
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC0000").s().p("ABGCjIAAjNQAAgngRgRQgSgTgpAAQgdAAgiAJIAAEPIg3AAIAAkxQBBgUA2ABQCCgBAABxIAADUg");
	this.shape_21.setTransform(177.025,58.35);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(5).to({_off:false},0).wait(295));

	// a
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EC0000").s().p("AhfB+QgigqAAhTQAAinCXABQA7gBAxASIAAEzIgzAAIgDgrQgcAzg2AAQg6gBgfgogAhJAAQAAB5BQAAQAoAAAcgfIAAjLQgagHgcAAQheAAAAB4g");
	this.shape_22.setTransform(143.325,58.75);
	this.shape_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(4).to({_off:false},0).wait(296));

	// r
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EC0000").s().p("AhUCiIAAkyQAxgRA3AAQAlAAAbAGQABAegGARQgWgGglAAQgWAAgaAGIAAEOg");
	this.shape_23.setTransform(118.65,58.425);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(3).to({_off:false},0).wait(297));

	// a
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EC0000").s().p("AhfB+QgigqAAhTQAAinCXABQA7gBAxASIAAEzIgzAAIgDgrQgcAzg2AAQg6gBgfgogAhJAAQAAB5BQAAQAoAAAcgfIAAjLQgagHgcAAQheAAAAB4g");
	this.shape_24.setTransform(88.975,58.75);
	this.shape_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(2).to({_off:false},0).wait(298));

	// u
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EC0000").s().p("Ah8AyIAAjUIA3AAIAADNQAAAnARARQASATApAAQAdAAAhgJIAAkPIA4AAIAAExQhBAUg2AAQiCAAAAhxg");
	this.shape_25.setTransform(57.175,59.125);
	this.shape_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(1).to({_off:false},0).wait(299));

	// G
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EC0000").s().p("AhwCnQgzg9AAhrQAAhtA3g9QA3g7BlAAQBDAAAuAUQgBAUgIAdQgxgTg3AAQhIAAgoAtQgoAvAABXQAABXAlAuQAnAxBGgBQAiABAfgIIAAixIA5AAIAADTQg2AYhGAAQhjAAg1hAg");
	this.shape_26.setTransform(20.675,52.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.8,862.4,98.2);


(lib.mc_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC0000").s().dr(-150,-300,300,600);
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_background, new cjs.Rectangle(0,0,300,600), null);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_299 = function() {
		if (!this.looped) this.looped = 1;
		if (this.looped++ == 2) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EC0000").ss(2,1,1).p("EgyngGHMBlPAAAIAAMPMhlPAAAg");
	this.shape.setTransform(364.0096,44.9815,1.1203,1.1224);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	// logo_pos
	this.instance = new lib.SantanderInternationalpos();
	this.instance.parent = this;
	this.instance.setTransform(182.4,75.25,0.3876,0.3877,0,0,0,408.7,123.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	// primary_cta
	this.instance_1 = new lib.primary_cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(653.15,45.15,0.7349,0.7349,0,0,0,72.1,17.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.primary_cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(160).to({_off:false},0).to({alpha:1},30).wait(110));

	// header
	this.instance_2 = new lib.mc_level1_final();
	this.instance_2.parent = this;
	this.instance_2.setTransform(217.15,35.7,0.45,0.4497,0,0,0,86.4,77);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).wait(256));

	// subheader
	this.instance_3 = new lib.mc_level2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(225.6,69.2,0.6897,0.6897,0,0,0,68.2,42.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100).to({_off:false},0).to({regY:42.9,scaleY:0.6898,y:69.3,alpha:1},30).wait(170));

	// T_C
	this.instance_4 = new lib.mc_level3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(216.55,87.6,0.5494,0.5496,0,0,0,68.2,42.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(130).to({_off:false},0).to({alpha:1},30).wait(140));

	// background_colour
	this.instance_5 = new lib.mc_background();
	this.instance_5.parent = this;
	this.instance_5.setTransform(364,45,2.4267,0.15,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:299.7,y:-45.05},29,cjs.Ease.quartInOut).wait(271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,-45,364,135.1);
// library properties:
lib.properties = {
	id: '05920BE2A36F420086AAC3866015E257',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['05920BE2A36F420086AAC3866015E257'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;